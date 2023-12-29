import React from 'react'
import img1 from "../../Assests/Cart/img1.png"
import img2 from "../../Assests/Cart/img2.png"
import img3 from "../../Assests/Cart/img3.png"


const OrderSummary = () => {
    return (
        <div className='shadow-lg pb-5 mb-10 pt-5'>
            <h1 className=" text-xl font-bold text-[#3C4242] text-center"> Order Summary</h1>
            <hr className='h-2 w-[80%]' />

            <div>
                <div className="flex gap-2 p-4">
                    <img src={img1} height={50} width={50} />
                    <div>
                        <h1 className='font-bold text-[#3C4242]'>Blue Flower Print Crop Top<span>x 1</span></h1>
                        <h1><span className='font-bold text-[#3C4242]'>Color:</span> Yellow</h1>
                    </div>
                    <h1>Rs.2900</h1>
                </div>
                <hr className="h-2 w-[90%] text-[#EDEEF2] m-1" />


                <div className="flex gap-2 p-4">
                    <img src={img2} height={50} width={50} />
                    <div>
                        <h1 className='font-bold text-[#3C4242]'>Levender Hoodie<span>x 2</span></h1>
                        <h1><span className='font-bold text-[#3C4242]'>Color:</span> Levendor</h1>
                    </div>
                    <h1>Rs.2900</h1>
                </div>
                <hr className="h-2 w-[90%] text-[#EDEEF2] m-2" />


                <div className="flex gap-2 p-4">
                    <img src={img3} height={50} width={50} />
                    <div>
                        <h1 className='font-bold text-[#3C4242]'>Black Sweatshirt <span>x 2</span></h1>
                        <h1><span className='font-bold text-[#3C4242]'>Color:</span> Black</h1>
                    </div>
                    <h1>Rs.2900</h1>
                </div>

                <hr className="h-2 w-[90%] text-[#EDEEF2] m-2" />


                <div className = 'text-md font-medium flex justify-around'>
                    <h1>Subtotal(3 items)</h1>
                    <h1>Rs.8600</h1>
                </div>
                <hr className="h-2 w-[90%] text-[#EDEEF2] m-2" />


                <div className = 'text-md font-medium flex justify-around'>
                    <h1>Savings</h1>
                    <h1>-Rs.300</h1>
                </div>

                <hr className = "h-2 w-[90%] m-2 text-[#EDEEF2]"/>
                <div className = 'text-md font-medium flex justify-around'>
                    <h1>Shipping</h1>
                    <h1>Rs.100</h1>
                </div>
                <hr className="h-2 w-[90%] text-[#EDEEF2] m-2" />


                <div className = 'text-md font-medium flex justify-around'>
                    <h1>Total</h1>
                    <h1>Rs.8400</h1>
                </div>
                
            </div>
        </div>
    )
}

export default OrderSummary