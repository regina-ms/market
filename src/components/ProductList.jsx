import React from 'react'
import EmptyProductList from './EmptyProductList'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

export default function ProductList() {
  const { products } = useSelector((state) => state.reducer)

  if (!products.length) return <EmptyProductList />

  return (
    <>
      <button className='btn btn-outline-warning'><Link to='/add-product' className='text-decoration-none text-reset'>Добавить товар</Link></button>
      <div className='d-flex flex-wrap mt-3 gap-5 justify-content-center'>
        {
          products.map(item => (<ProductItem key={item.id} product={item} />))
        }
      </div>
    </>
  )
}
