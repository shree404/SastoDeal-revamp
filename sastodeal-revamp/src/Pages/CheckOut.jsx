import React from 'react'
import Breadcrums from '../Components/CheckOut/Breadcrums';
import BilingDetails from '../Components/CheckOut/BilingDetails';
import OrderSummary from '../Components/CheckOut/OrderSummary';


const CheckOut = () => {
  return (
    <div>
      <div className='m-10'>
        <Breadcrums />
      </div>

      <div className='flex'>
        <BilingDetails />
        <OrderSummary/>
      </div>
    </div>
  )
}

export default CheckOut;