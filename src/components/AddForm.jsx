import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IMaskInput } from 'react-imask';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { SAVE_PRODUCT } from '../redux/actions';

export default function AddForm() {
  const { image, title, price, discount, dis_price } = useSelector(state => state.reducer.product);
  const { products } = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const imgRef = useRef();

  const handleImgSet = async () => {
    const files = [...imgRef.current.files]
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    dispatch({ type: 'SET_IMAGE', payload: urls[0] });
  }

  const handleOnChangeDiscount = (e) => {
    dispatch({ type: 'SET_DISCOUNT', payload: e.target.value })
    if (price) {
      dispatch({ type: 'SET_DIS_PRICE', payload: `${Math.floor(price - (price / 100 * e.target.value))}` });
    }
  }

  const handleOnChangePrice = (e) => {
    dispatch({ type: 'SET_PRICE', payload: e.target.value });
    if (discount) {
      dispatch({ type: 'SET_DIS_PRICE', payload: `${Math.floor(e.target.value - (e.target.value / 100 * discount))}` });
    }
  }

  const handleOnClickAdd = (e) => {
    e.preventDefault()
    if(image && title && price) {
      products.push({ image, title, price, discount, dis_price, id: nanoid() });
      dispatch({ type: SAVE_PRODUCT, payload: products })
      alert("Товар успешно добавлен")
    } else {
      alert("Заполните все обязательные поля")
    }
  }


  return (
    <form className='d-flex flex-column w-100 align-items-start'>
      <div className="input-group mb-3 d-flex flex-column gap-3 align-items-start">
        <label className='input-group-text'>Выберете картинку* 
          <input type='file' ref={imgRef} onChange={handleImgSet} required className='form-control' />
        </label>
        {
          image ? <img src={image} alt='' className='w-25 h-25 object-fit-cover' /> : null
        }
        
      </div>

      <div className='input-group mb-3'>
        <label> Введите название товара*
          <IMaskInput
            value={title}
            onChange={e => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
            className='form-control'
          />
        </label>
      </div>

      <div className='input-group mb-3'>
        <label> Введите стоиомтсь товара, ₽*
          <IMaskInput
            mask={Number}
            value={price}
            onChange={handleOnChangePrice}
            className='form-control'
          />
        </label>
      </div>

      <div className='input-group mb-3'>
        <label> Введите скидку, %
          <IMaskInput
            mask={Number}
            value={discount}
            onChange={handleOnChangeDiscount}
            className='form-control'
          />
        </label>
      </div>

      <div className='input-group mb-3'>
        <label> Цена со скидкой, ₽
          <IMaskInput
            mask={Number}
            value={dis_price}
            className='form-control'
          />
        </label>
      </div>
      <button className='btn btn-outline-warning' onClick={handleOnClickAdd}>Добавить</button>
      <button type="button" className='btn btn-outline-primary mt-3'><Link to='/products-list' className='text-decoration-none text-reset'>К списку товаров</Link></button>
    </form>
  )
}


const fileToDataUrl = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', evt => {
      resolve(evt.currentTarget.result);
    });

    fileReader.addEventListener('error', evt => {
      reject(new Error(evt.currentTarget.error));
    });

    fileReader.readAsDataURL(file);
  });
}
