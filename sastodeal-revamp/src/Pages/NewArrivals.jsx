import React from 'react'

import Hero from "../Components/NewArrivals/Hero"
import Breadcrumb from '../Components/NewArrivals/Breadcrumb';
import Products from '../Components/NewArrivals/Products';
const NewArrivals = () => {
  return (
    <div>
        <Hero/>
        <Breadcrumb separator=">" color = "inherit"/>
        <Breadcrumb separator="/" color = "text.primary"/>
        <Products/>
    </div>
  )
}

export default NewArrivals;