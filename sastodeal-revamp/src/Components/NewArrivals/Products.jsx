import React from 'react'
import { Box } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import products from '../../Assests/NewArrivals/product'
import Ratings from './Ratings'

const Products = () => {
    return (
        <div className=' grid grid-cols-3'>
            {
                products.map((item) => {
                    return (
                        <Box className="hover:shadow-lg m-auto cursor-pointer mb-10">
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <Box sx={{p:2}}>
                                <div className='text-lg font-bold text-[#1C1C1C]'>
                                    <h1>{item.name}</h1>
                                    <div className='flex gap-10'>
                                        <p>Rs. 99.50</p><span className=' text-[#8B96A5] font-thin line-through'>Rs.1128.00</span>
                                    </div>
                                </div>

                                <div className='flex '>
                                    <Ratings />
                                    <FavoriteBorderIcon className='text-[#613E98]' />
                                </div>
                            </Box>
                        </Box>
                    )
                })
            }
        </div>
    )
}

export default Products;