import { Box } from '@mui/material';
import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CheckOut = () => {
    return (
        <div className='mb-10 '>
            <Box className="bg-[#F6F6F6] flex justify-around pt-20 pb-10">
                <div>
                    <h1 className = "text-lg font-bold text-[#3C4242]">Discount Codes</h1>
                    <p>Enter your coupon code if you have one</p>
                    <div>
                        <input type="text" className='p-2 bg-[#FFF] rounded-ss-lg rounded-es-lg' />
                        <button className="bg-[#613E98] rounded-se-lg rounded-ee-lg p-2 text-white mt-5">Apply Coupon</button>
                    </div>
                    <button className="bg-[#FFF] p-2 rounded-lg m-10">
                        Continue Shopping
                        <ArrowForwardIcon />
                    </button>
                </div>

                <div>
                    <div className='text-[#3C4242]  flex gap-16'>
                        <h1> Sub Total</h1>
                        <p>Rs.8700</p>
                    </div>

                    <div className='text-[#3C4242]  flex gap-16'>
                        <h1> Shipping</h1>
                        <p>Rs.100</p>
                    </div>

                    <div className='text-[#3C4242] font-bold flex gap-10 mt-5'>
                        <h1 > Grand Total</h1>
                        <p>Rs.8800</p>
                    </div>

                    <hr className = "h-2 w-[120%] text-[#BEBCBD] mt-10 mb-10" />

                    <button className = 'bg-[#613E98] text-white p-2 rounded-lg font-bold'>Proceed To Checkout</button>
                </div>
            </Box>
        </div>
    )
}

export default CheckOut;