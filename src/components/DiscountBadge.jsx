import React from 'react'


export default function DiscountBadge({discount}) {
  return (
    <span class="position-absolute top-0 start-0 translate-middle badge rounded bg-danger">
    {discount}%
  </span>
  )
}
