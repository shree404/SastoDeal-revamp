import React from 'react'

import Hero from "../Components/NewArrivals/Hero"
import Breadcrumb from '../Components/NewArrivals/Breadcrumb';
import Products from '../Components/NewArrivals/Products';
import Filters from '../Components/NewArrivals/Filters';
const NewArrivals = () => {
  return (
    <div>
        <Hero/>
        <Breadcrumb separator=">" color = "inherit"/>
        {/* <Products/> */}
        <Filters/>
    </div>
  )
}

export default NewArrivals;