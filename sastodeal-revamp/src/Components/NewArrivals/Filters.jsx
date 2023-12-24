import React from 'react'
import { Box, Typography } from '@mui/material'
import CheckboxList from './CheckboxList';


var details = [
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
const Filters = () => {

    return (
        <div>
            <Box>
                <div className='flex justify-evenly'>
                    <Typography variant='h6' sx={{fontWeight:"700"}}>Filter</Typography>
                    <Typography sx={{textDecoration:"underline",color:"#7C3FFF",textDecorationColor:"#7C3FFF", cursor:"pointer"}}>Reset All</Typography>
                </div>

                <CheckboxList details ={ details}/>
            </Box>
        </div>
    )
}

export default Filters;