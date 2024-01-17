import React from 'react'
import { Link } from 'react-router-dom'

export default function StartPage() {
  return (
    <>
    <button className='btn btn-outline-warning btn-lg'><Link to='/add-product' className='text-decoration-none text-reset'>Добавить товар</Link></button>
    <button className='btn btn-outline-primary btn-lg mt-3'><Link to='/products-list' className='text-decoration-none text-reset'>К списку товаров</Link></button>
    </>
  )
}
