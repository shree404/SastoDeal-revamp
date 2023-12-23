import React from 'react'
import Section from './Section';

import phone1 from '../Assests/phone1.png'
import phone2 from '../Assests/phone2.png'
import phone3 from "../Assests/phone3.png"
import phone4 from '../Assests/phone4.png'
import { Box } from '@mui/material';
const SmartPhoneSection = () => {
    details = [
        {
            name:"Galaxy M13 (4GB | 64 GB )",
            new_price:10499,
            old_price:14999,
            save_price:"Save - Rs.4500",
            image:phone1
        },
        {
            name:"Galaxy M13 (4GB | 64 GB )",
            new_price:10499,
            old_price:14999,
            save_price:"Save - Rs.4500",
            image:phone1
        },
        {
            name:"Galaxy M33 (4GB | 64 GB )",
            new_price:16999,
            old_price:24999,
            save_price:"Save - Rs.8000",
            image:phone2
        },
        {
            name:"Galaxy M53 (4GB | 64 GB )",
            new_price:31999,
            old_price:40999,
            save_price:"Save - Rs.9000",
            image:phone3
        },
        {
            name:"Galaxy S22 Ultra",
            new_price:67999,
            old_price:85999,
            save_price:"Save - Rs.18000",
            image:phone4
        }
    ]
  return (
    <div>
        <Section header = "Grab the best deal on Smartphones"/>

        <div>
            {
                details.map((items,i)=>{
                    return <phone key = {i} item = {items}/>
                })
            }
        </div>
    </div>
  )
}

const phone = (props)=>{
    return(
        <Box>
            <div>
                <img src = {props.item.image} />
            </div>

            <div>
                <h1>{props.item.name}</h1>
                <div>
                    <h1>{props.item.new_price}</h1>
                    <p>{props.item.old_price}</p>
                    <hr/>
                </div>
            </div>

            <div>
                <h2>{props.item.save_price}</h2>
            </div>
        </Box>
    )

}

export default SmartPhoneSection;