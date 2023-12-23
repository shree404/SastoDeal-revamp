import React from 'react'
import { Box, Typography } from '@mui/material'

import watch from '../Assests/watch.png'
import laptop from '../Assests/laptop.png'
import gopro from '../Assests/gopro.png'
import headphone from '../Assests/headphone.png'
import camera from '../Assests/phone.png'

const Deals_Offers = () => {
  let item_details = [
    {
      name: "Smart watches",
      discount: "25%",
      image: watch
    },
    {
      name: "Laptops",
      discount: "15%",
      image: laptop
    },
    {
      name: "GoPro cameras",
      discount: "40%",
      image: gopro
    },
    {
      name: "Headphones",
      discount: "25%",
      image: headphone
    },
    {
      name: "Canon cameras",
      discount: "25%",
      image: camera
    }
  ]

  return (
    <div className='flex  m-10 '>
      {/* FOR RIGHT SECTION */}
      <Box sx={{p:4, backgroundColor:"#45A69B", color:"white", alignItems:"center",pb:10}}>
        <Typography variant='h4'>Deals and offers</Typography>
        <Typography variant='body' sx={{ml:7}}>Hygiene equipments</Typography>
        <Box sx={{display:'flex',gap:2, mt:2}}>
          <Box sx = {{p:2 , backgroundColor:"#613E98", fontWeight:"900", color:"white",height:75 ,width:75}}><Typography variant='body' >04 Days</Typography></Box>
          
          <Box sx = {{p:2 , backgroundColor:"#613E98", fontWeight:"900", color:"white",height:75 ,width:75}}><Typography variant='body' >13 Hours</Typography></Box>

          <Box sx = {{p:2 , backgroundColor:"#613E98", fontWeight:"900", color:"white",height:75 ,width:75}}><Typography variant='body' >34 Mins</Typography></Box>

          <Box sx = {{p:2 , backgroundColor:"#613E98", fontWeight:"900", color:"white",height:75 ,width:75}}><Typography variant='body' >59 Secs</Typography></Box>

          
          
        </Box>
      </Box>
      {/* FOR LEFT PRODUCT SECTION */}
      <div className='flex  justify-between '>

        {
          item_details.map((items) => {
            return (
              <Box sx={{border:"1px solid #E0E0E0", textAlign:"center"}}>
                <Box height={150} width={175} sx={{mb:4}}>
                  <img src={items.image} height={150} width={150} className='p-5'/>
                </Box>
                <Typography variant='body' sx={{ textAlign: "right",p:3}}>{items.name}</Typography>

                <Box sx={{ backgroundColor: "#FFE3E3", color: "#EB001B", borderRadius: 5, width: "55px", ml: 5, textAlign: "center" }}>
                  -{items.discount}
                </Box>
              </Box>
            )
          })
        }

      </div>
    </div>
  )
}

export default Deals_Offers