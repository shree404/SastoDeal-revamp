import React from 'react'

function Myinfo(){
    return(
        <div>
            <div className='text-[#3C4242] font-bold text-3xl mb-5'>
                <h2>My Info</h2>
            </div>
            <div className='text-[#3C4242] font-bold text-2xl mb-3'>
                <h2 >Contact</h2>
            </div>
            <div className='text-[#3C4242] font-bold text-2xl'>
                <h2>Details</h2>
            </div>
            <div className='text-[#807D7E] font-bold text-xl'>
                <h2>Your Name</h2>
            </div>
            
             <div className='flex justify-between  mt-3 mb-3'>
                <h2 className='text-[#3C4242] font-bold text-xl'>Ron Shah</h2>
                <h2 className='text-[#3C4242] font-bold text-xl flex justify-end '>Change</h2>
             </div>
            <div>
            <hr className="border-t-30 border-black-500 my-4 w-full   "></hr>
            </div>
            <div className=' mt-3 mb-3'>
            <h2 className='text-[#807D7E] font-bold text-lg'>Email Address </h2> 
            <div className='flex justify-between'>
                <h2 className='text-[#3C4242] font-bold text-lg'>hari@gmail.com</h2>
                <h2 className='text-[#3C4242] font-bold text-lg flex justify-end '>Change</h2>
             </div>
            </div>
            <hr className="border-t-30 border-black-500 my-4 w-full   "></hr>
            <div className=' mt-3 mb-3'>
            <h2 className='text-[#807D7E] font-bold text-lg'>Phone Number </h2> 
            <div className='flex justify-between '>
                <h2 className='text-[#3C4242] font-bold text-lg'>8980252445</h2>
                <h2 className='text-[#3C4242] font-bold text-lg flex justify-end '>Change</h2>
             </div>
            </div>
            <hr className="border-t-30 border-black-500 my-4 w-full   "></hr>
            <div className=' mt-3 mb-3'>
            <h2 className='text-[#807D7E] font-bold text-xl '>Password </h2> 
            <div className='flex justify-between '>
                <h2 className='text-[#3C4242] font-bold text-xl'>........</h2>
                <h2 className='text-[#3C4242] font-bold text-xl flex justify-end '>Change</h2>
             </div>
            </div >
            <hr className="border-t-30 border-black-500 my-4 w-full   "></hr>
            <div className='flex justify-between  mt-3 mb-3'>
                <h2 className='text-[#3C4242] font-bold text-xl' >Address</h2>
                <div className='flex justify-end'>
                <h2 className='text-[#3C4242] font-bold text-xl '>Add New</h2>
                </div>
            </div>
            <div className='flex gap-10 mt-5'>
            <div className="bg-[#F6F6F6] p-4 rounded shadow-md ">
                <h2 className='text-[#3C4242] font-bold text-lg mb-2'>Ron Shah</h2>
                <h2 className='text-[#807D7E]  text-lg mb-2'>8980252445</h2>
                <h2 className='text-[#807D7E]  text-lg mb-2'>Kathmandu Nepal</h2>
                <div className='flex gap-10 mt-10'>
                    <button className='text-[#807D7E] px-3 py-2 border border-[#807D7E] border-1000 rounded-lg' >Home</button>
                    <button className='text-[#807D7E] px-6 py-2 border border-[#807D7E] border-1000 rounded-lg'>Default billing address</button>
                </div>
                <div className='flex gap-3 mt-5'>
                    <h2 className='text-[#3C4242] font-bold text-lg'>Remove</h2>
                    <div className="w-1 h-6 bg-[#D9D9D9] rounded "></div>
                    <h2 className='text-[#3C4242] font-bold text-lg'>Edit</h2>
                </div>
            </div>
            <div className="bg-[#F6F6F6] p-4 rounded shadow-md ">
                <h2 className='text-[#3C4242] font-bold text-lg mb-2'>Tisa Shah</h2>
                <h2 className='text-[#807D7E]  text-lg mb-2'>8980252445</h2>
                <h2 className='text-[#807D7E]  text-lg mb-2'>Butwal Nepal</h2>
                <div className='flex gap-10 mt-10'>
                    <button className=' text-[#807D7E] px-3 py-2 border border-[#807D7E] border-1000 rounded-lg'>Home</button>
                    <button className='text-[#807D7E] px-6 py-2 border border-[#807D7E] border-1000 rounded-lg'>Default shipping address</button>
                </div>
                <div className='flex gap-3 mt-5'>
                    <h2 className='text-[#3C4242] font-bold text-lg'>Remove</h2>
                    <div className="w-1 h-6 bg-[#D9D9D9] rounded "></div>
                    <h2 className='text-[#3C4242] font-bold text-lg'>Edit</h2>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Myinfo;