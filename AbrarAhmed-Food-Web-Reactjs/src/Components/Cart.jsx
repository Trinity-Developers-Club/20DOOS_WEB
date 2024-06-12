import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let products =  useSelector(states=>states.ProductsSlice.added_products)


    console.log(products);
  return (
    <div>Cart</div>
  )
}

export default Cart