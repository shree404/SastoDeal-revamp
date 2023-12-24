import React, { useState } from 'react'
import { Box, Typography, Pagination } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import GridViewIcon from '@mui/icons-material/GridView';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import products from '../../Assests/NewArrivals/product'
import Ratings from './Ratings'
import Breadcrumb from './Breadcrumb';

const Products = () => {
    let [grid, setgrid] = useState("grid-cols-3");
    let [grid3open, setgrid3open] = useState(true);

    const handle_grid3 = () => {
        setgrid("grid-cols-3");
        setgrid3open(true);
    }
    const handle_grid2 = () => {
        setgrid("grid-cols-2");
        setgrid3open(false)

    }

    return (
        <Box className="m-10 ml-[25%]">
            {/* BREADCRUMBS OF PRODUCT */}
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                {/* BREADCRUMBS */}
                <Breadcrumb separator="/" color="text.primary" />
                {/* GRID CONTROLS */}
                <Box>
                    <GridViewIcon
                        sx={{ cursor: "pointer", border: "1px solid #E4E4E4", fontSize: "40px", p: .2 }} onClick={handle_grid2}
                        className={`${grid3open ? "text-[#E4E4E4]" : "text-[#7C3FFF]"}`}

                    />
                    <AppsIcon
                        sx={{ cursor: "pointer", border: "1px solid #E4E4E4", fontSize: "40px", p: .2 }} onClick={handle_grid3}
                        className={` ${grid3open ? "text-[#7C3FFF]" : "text-[#E4E4E4]"}`}

                    />
                </Box>

                {/* SORT FUNCTIONALITY */}
                <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2, border: "1px solid #E4E4E4", p: 1 }}>
                    <Typography>Sort By: Featured</Typography>
                    <KeyboardArrowDownIcon />
                </Box>
            </Box>

            {/* PRODUCT GRID */}
            <Box>
                <div className={`grid ${grid} p-10`}>
                    {
                        products.map((item) => {
                            return (
                                <Box className="hover:shadow-lg m-auto cursor-pointer mb-10">
                                    <div>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <Box sx={{ p: 2 }}>
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
            </Box>


            {/* For PAGINATION */}
            <Box sx={{display:"flex",color:"#1C1C1C",alignContent:"flex-end"}}>
                <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2, border: "1px solid #E4E4E4", p: .5 }}>
                    <Typography>Show 10</Typography>
                    <KeyboardArrowDownIcon />
                </Box>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Box>
        </Box>
    )
}

export default Products;