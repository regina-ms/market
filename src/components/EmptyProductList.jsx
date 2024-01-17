import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyProductList() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <p>Список товаров пуст</p>
            <button className='btn btn-warning btn-lg'><Link className='text-decoration-none text-reset' to='/add-product'>Хотите добавить?</Link></button>
        </div>
    )
}
