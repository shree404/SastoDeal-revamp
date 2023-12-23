import React from 'react'
import Carousel from 'react-material-ui-carousel'

import Section from './Section';
import { Paper } from '@mui/material';

import apple from "../Assests/apple_banner.png"
import xiaomi from "../Assests/xiaomi_banner.png"
import realme from "../Assests/realme_banner.png"

const ElectronicsBrand = () => {
  return (
    <div className=' bg-white'>
        <Section header = "Top Electronics Brands"/>
        <Carousel className=' border-collapse m-5'  >
            <Paper sx={{display:"flex", justifyContent:"space-around" ,gap:2}}>
                <img src={apple} alt=""  className='w-1/3 '/>
                <img src={xiaomi} alt="" className='w-1/3' />
                <img src={realme} alt="" className='w-1/3' />   
            </Paper>

            <Paper sx={{display:"flex", justifyContent:"space-around",gap:2}}>
                <img src={realme} className='w-1/3' alt="" />
                <img src={apple} className='w-1/3'  alt="" />
                <img src={xiaomi} className='w-1/3' alt="" />   
            </Paper>

           
        </Carousel>
    </div>
  )
}

export default ElectronicsBrand;