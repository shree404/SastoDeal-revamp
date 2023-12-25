import React from 'react'
import { Box } from '@mui/material'

import Section from './Section';

import Carousel from './Carousel';
import Cloth_banner from './Cloth_banner';

import phone from '../Assests/phone.png'
import cosmetics from '../Assests/cosmetic.png'
import electronics from '../Assests/electronics.svg'
import furniture from '../Assests/furniture.png'
import watch from '../Assests/smartwatch.png'
import decor from '../Assests/decore.png'

import banner1_0 from "../Assests/banner1_0.png"
import banner2 from "../Assests/banner2.png"
import banner3 from '../Assests/banner3.png'
import accessories from '../Assests/accessories.png'

import infinix from '../Assests/infinix.png'
import nothing from '../Assests/nothing.png'
import oneplus from '../Assests/oneplus.png'
import purpet from '../Assests/purpet.png'
import samsung from '../Assests/samsung.png'
import whirlpool from "../Assests/whirlpool.png"

const Top_Category = () => {
    let products = [
        {
            name: "Mobile",
            image: phone
        },
        {
            name: "Cosmetics",
            image: cosmetics
        },
        {
            name: "Electronics",
            image: electronics
        }
        ,
        {
            name: "Furniture",
            image: furniture
        }
        ,
        {
            name: "Watches",
            image: watch
        },
        {
            name: "Decor",
            image: decor
        },
        {
            name: "Accessories",
            image: accessories
        },




    ]
    return (
        <div>
            <Section header = "Shop From Top Categories"/>

            <div className='flex justify-around m-5 max-sm:flex-2'>
                {
                    products.map((items) => {
                        return (
                            <Box>
                                <Box sx={{ height: 150, width: 150, backgroundColor: "#F5F5F5", p: 3, borderRadius: "100%", cursor: "pointer" }} className="hover:border border-[#613E98]">
                                    <img src={items.image} className='m-auto' />
                                </Box>
                                <Box sx={{ m: 2, ml: 5 }}>
                                    {items.name}
                                </Box>
                            </Box>)
                    })
                }
            </div>

          {/* FOR CLOTH BANNERS  */}
            <Cloth_banner/>


            {/* BANNERS 2*/}
            <Box sx={{ display: "flex", gap: 2, justifyContent: "space-around", m: 5, flex: 1 }}>
                <img src={banner1_0} className='cursor-pointer' />
                <img src={banner2} className='cursor-pointer' />
                <img src={banner3}  className='cursor-pointer'/>

            </Box>

            {/* Curousel */}
            <Carousel/>

            {/* LIST OF COMPANIES */}
            <Box sx={{backgroundColor:"#45A69B",display:"flex" ,justifyContent:"space-around", mt:5}}>
                <img src = {infinix}/>
                <img src = {nothing}/>
                <img src = {oneplus}/>
                <img src = {purpet} className='h-[80%] m-auto' />
                <img src = {samsung}/>
                <img src = {whirlpool}/>
                
            </Box>

        </div>
    )
}

export default Top_Category;