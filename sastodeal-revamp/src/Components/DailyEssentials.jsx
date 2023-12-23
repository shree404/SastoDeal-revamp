import React from 'react'
import Section from './Section';

import {Box} from '@mui/material' 
import grocery from '../Assests/grocery.png'
import fruits from '../Assests/fruits.png'
import mango from '../Assests/mango.png'
import cherry from '../Assests/cherry.png'
import straberry from '../Assests/strawberry.png'
import vegetables from '../Assests/vegetables.png'

const DailyEssentials = () => {
    var details = [
        {
            name:"Daily Essentials",
            image:grocery
        },
        {
            name:"Vegetables",
            image:vegetables
        },{
            name:"Fruits",
            image:fruits
        },{
            name:"Strawberry",
            image:straberry
        },{
            name:"Mango",
            image:mango
        },{
            name:"Cherry",
            image:cherry
        },
    ]
  return (
    <div>
        <Section header = "Daily Essentials"/>
        <div className='flex justify-around p-5 '>
            {
                details.map((item,i)=>{
                    return <Items key = {i} item = {item}/>
                })
            }
        </div>
    </div>
  )
}

const Items = (props)=>{
    return(
        <Box >
            <div className=' h-3/4 bg-[#F5F5F5] rounded-xl mb-5 hover:shadow-lg border hover:border-[#613E98] cursor-pointer'>
                <img src= {props.item.image} className='mt-auto'/>
            </div>

            <div>
                <p className=' text-[#666666] text-center font-medium'>{props.item.name}</p>
                <p className='text-[#222222] text-center font-extrabold font-2xl'>UP to 50% OFF</p>
            </div>
        </Box>
    )
}

export default DailyEssentials;