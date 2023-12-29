import React from 'react';
import heart from '../image/heart.png';
import myorders from '../image/myorders.png';
import signout from '../image/signout.png';
import user from '../image/user.png';

function PersonalInfoSection(){
    return(
        <div>
            <div className='flex gap-4'>
            <div className="w-2 h-8 bg-[#613E98] rounded-lg shadow-md"> </div>
                <p className='text-3xl text-black font-bold'>Hello Ron</p>
            </div>
            <div>
                <p className='text-[#807D7E] mt-5'>
                    Welcome to your account 
                </p>
            </div>
            <div className='mt-10 '>
                    <div className="w-30 h-10 bg-white rounded-lg ">
                    <div className='flex gap-4  ml-8'>
                    <img src= {myorders} alt= "order icon" />
                    <p className='text-[#807D7E] font-bold text-ls'> My Orders</p>
                    </div>
                </div>
                <div className="w-30 h-10 bg-white rounded-lg ">
                <div className='flex gap-4 mt-5 ml-8'>
                    <img src={heart} alt="Wishlist icon  " className='' />
                    <p className='text-[#807D7E] font-bold text-ls' >Wishlist</p>
                    </div>
                </div>
                <div className="w-30 h-10 bg-[#F6F6F6] rounded-lg mt-5 ">
                <div className='flex gap-8 '>
                <div className="w-1 h-10 bg-black rounded "></div>
                    <img src={user} alt="User icon"  className='h-6 w-6   '/>
                    <p className='text-[#807D7E] font-bold text-ls' >My info</p>
                    </div>
                </div>
                <div className="w-30 h-10 bg-white rounded-lg ">
                <div className='flex gap-4 mt-5 ml-8'>
                    <img src={signout} alt="Signout Icon" />
                    <p className='text-[#807D7E] font-bold text-ls'>Sign Out </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoSection;