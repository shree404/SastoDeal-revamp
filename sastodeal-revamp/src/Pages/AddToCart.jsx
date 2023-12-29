import React from 'react'
import Header from "../Components/AddToCart/Header"
import CartItemDetails from "../Components/AddToCart/CartItemDetails"
import CheckOut from "../Components/AddToCart/CheckOut"


const AddToCart = () => {
  return (
    <div>
        <Header/>
        <CartItemDetails/>
        <CheckOut/>
    </div>
  )
}

export default AddToCart;