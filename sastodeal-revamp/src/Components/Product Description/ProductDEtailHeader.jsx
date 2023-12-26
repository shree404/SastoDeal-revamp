import React from 'react';
import arrow from '../image/arrow.png';

function ProductDetailHeader(){
    return(
        <div className='mt-5 mb-5'>
            <div className='flex gap-3'>
                <p className="text-[#ABAFB2]">Home</p>
                <p>
                    <img src={arrow} alt="arrow" />
                </p>
                <p className="text-[#ABAFB2]">
                    Men
                </p>
                <p>
                    <img src={arrow} alt="arroww" />
                </p>
                <p className='text-black font-bold'>
                    T-shirt
                </p>
            </div>
        </div>
    )
}

export default ProductDetailHeader;