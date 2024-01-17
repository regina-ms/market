import React from 'react'
import { Link } from 'react-router-dom'
import DiscountBadge from './DiscountBadge'

export default function ProductItem({ product }) {
  const { title, price, image, discount, dis_price } = product
  return (
    <Link to="#" className='text-decoration-none text-reset w-25 card'>
      <img src={image} alt={title} className='card-img-top w-100 h-100 object-fit-contain' />
      <div className='card-body'>
        <div className='price d-flex align-items-center gap-2'>
          {
            discount ? <><p className='fs-5 fw-bold'>{dis_price} ₽</p> <p className='text-decoration-line-through text-secondary fw-bold'>{price} ₽</p></> : <p className='fs-5 fw-bold'>{price} ₽</p>
          }
        </div>
        <div className='card-title'>{title}</div>
      </div>
      
      {
        discount ? <DiscountBadge discount={discount} /> : null
      }
    </Link>

  )
}
