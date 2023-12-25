import React from 'react'
import { Box, Typography,Button } from '@mui/material'
import CheckboxList from './CheckboxList';
import Size from './Size'
import Color from './Color'
import Brands from './Brands'
import Price from './Price'

var details_department = [
    {
        name: "Men",
        num: 230
    },
    {
        name: "Kids",
        num: 45
    }, {
        name: "Women",
        num: 102
    }, {
        name: "Big and Tall",
        num: 16
    }
]
var details_category = [
    {
        name: "Tees",
        num: 230
    },
    {
        name: "Accessires",
        num: 45
    }, {
        name: "Polos",
        num: 102
    }, {
        name: "Sweetshirts and Hoodles",
        num: 22
    }, {
        name: "Pants",
        num: 43
    }, {
        name: "Jackets",
        num: 34
    }, {
        name: "Sweaters",
        num: 9
    }, {
        name: "Shorts",
        num: 9
    }, {
        name: "Swimwear",
        num: 29
    }, {
        name: "Casual Shirt",
        num: 18
    }, {
        name: "Lounge and Underwear",
        num: 106
    }
]

const Filters = () => {

    return (
        <div>
            <Box>
                <div className='flex justify-between w-[100%]'>
                    <Typography variant='h6' sx={{ fontWeight: "700" }}>Filter</Typography>
                    <Typography sx={{ textDecoration: "underline", color: "#7C3FFF", textDecorationColor: "#7C3FFF", cursor: "pointer" }}>Reset All</Typography>
                </div>

                <Box>
                    <CheckboxList details={details_department} title="Department" />
                    <CheckboxList details={details_category} title="Category" />
                    <Size />
                    <Color/>
                    <Brands/>
                    <Price/>
                </Box>

                <Button variant="outlined" style={{color:"#7C3FFF",borderColor:"#7C3FFF",width:"100%",padding:"10px"}}>Save</Button>
            </Box>
        </div>
    )
}

export default Filters;