import { Box, Typography } from '@mui/material';
import React from 'react'
import Carousel from 'react-material-ui-carousel';

import review1 from '../Assests/review1.png'
import review2 from '../Assests/review2.png'
import review3 from '../Assests/review3.png'


const Reviews = () => {
    return (
        <div>
            <Box sx={{ backgroundColor: "#613E98"}}>
                <Box sx={{ backgroundColor: "#613E98", left: "50%", textAlign: "center", color: "white",pt:2}}>
                    <Typography variant='h4'>Reviews</Typography>
                    <Typography className=' mt-3'>Selected product reviews on Sastodeal</Typography>
                </Box>

                <Carousel>
                    <Box sx={{ display: "flex", gap: 2, justifyContent: "space-evenly", p: 5 }}>
                        <img src={review1} className='w-1/3 cursor-pointer' />
                        <img src={review2} className='w-1/3 cursor-pointer' />
                        <img src={review3} className='w-1/3 cursor-pointer' />
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, justifyContent: "space-evenly", p:5}}>
                        <img src={review2} className='w-1/3' />
                        <img src={review3} className='w-1/3' />
                        <img src={review1} className='w-1/3' />
                    </Box>
                </Carousel>
            </Box>
        </div>
    )
}

export default Reviews;