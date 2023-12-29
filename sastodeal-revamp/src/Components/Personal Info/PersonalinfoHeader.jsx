import React from 'react';
import arrow from '../image/arrow.png';

function PersonalInfoHeader(){
    return(
        <div className='mt-5 mb-5'>
             <div className='flex gap-3'>
                <p className="text-[#ABAFB2] ">Home</p>
                <p>
                    <img src={arrow} className='h-5 w-5' alt="arrow" />
                </p>
                <p className="text-[#ABAFB2]">
                    My Account 
                </p>
                <p>
                    <img src={arrow} className='h-5 w-5' alt="arroww" />
                </p>
                <p className='text-black font-bold'>
                    Personal Info
                </p>
            </div>
        </div>
    )
}

export default PersonalInfoHeader;