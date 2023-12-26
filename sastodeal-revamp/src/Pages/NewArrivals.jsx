import React from 'react'

import Hero from "../Components/NewArrivals/Hero"
import Breadcrumb from '../Components/NewArrivals/Breadcrumb';
import Products from '../Components/NewArrivals/Products';
const NewArrivals = () => {
  return (
    <div>
      <Hero />
      <div className='m-2 ml-24'>
        <Breadcrumb separator=">" color="inherit" />
      </div>
      <Products />
    </div>
  )
}

export default NewArrivals;