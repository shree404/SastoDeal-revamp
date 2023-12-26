import React from 'react'
import Section from './Section';

import phone1 from '../Assests/phone1.png'
import phone2 from '../Assests/phone2.png'
import phone3 from "../Assests/phone3.png"
import phone4 from '../Assests/phone4.png'
import { Box } from '@mui/material';

function SmartPhoneSection() {
    let details = [
        {
            name: "Galaxy M13 (4GB | 64 GB )",
            new_price: 10499,
            old_price: 14999,
            save_price: "Save - Rs.4500",
            image: phone1
        },
        {
            name: "Galaxy M13 (4GB | 64 GB )",
            new_price: 10499,
            old_price: 14999,
            save_price: "Save - Rs.4500",
            image: phone1
        },
        {
            name: "Galaxy M33 (4GB | 64 GB )",
            new_price: 16999,
            old_price: 24999,
            save_price: "Save - Rs.8000",
            image: phone2
        },
        {
            name: "Galaxy M53 (4GB | 64 GB )",
            new_price: 31999,
            old_price: 40999,
            save_price: "Save - Rs.9000",
            image: phone3
        },
        {
            name: "Galaxy S22 Ultra",
            new_price: 67999,
            old_price: 85999,
            save_price: "Save - Rs.18000",
            image: phone4
        }
    ]
    return (
        <div>
            <Section header="Grab the best deal on Smartphones" />

            <div className=" flex justify-around p-5">
                {
                    details.map((items, i) => {
                        return <Phone key={i} item={items} />
                    })

                }
            </div>
        </div>
    )
}

function Phone(props) {
    return (
        <Box className="p-2 shadow-xl rounded-xl text-[#222222] cursor-pointer hover:shadow-2xl ">

            <div className=" bg-[#F5F5F5] h-52 p-4 mb-4 relative">
                <img src={props.item.image} className=' h-44 m-auto' />
                <div className=' absolute bg-[#613E98] top-0 right-0 p-2  rounded-se-3xl rounded-es-3xl text-white font-md font-bold' >
                    <p className='w-1/2 text-center m-auto'>56% OFF</p>
                </div>
            </div>

            <div className='p-2'>
                <h1 className=' text-lg font-bold mb-3'>{props.item.name}</h1>
                <div className='flex justify-between mb-3'>
                    <h1 className=' text-base font-extrabold'>Rs.{props.item.new_price}</h1>
                    <p className=' line-through '>Rs.{props.item.old_price}</p>
                </div>
                <hr className=' text-[#613E98]' />
            </div>

            <div className='p-2'>
                <h2 className='text-[#249B3E] font-bold text-lg'>{props.item.save_price}</h2>
            </div>
        </Box>
    )

}

export default SmartPhoneSection;