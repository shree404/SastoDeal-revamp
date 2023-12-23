import React from 'react'
import {Box,Typography} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Section = (props) => {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-between", m: 4 }}>
                <Typography variant='h6' sx={{ textDecoration: "underline", textUnderlineOffset: "15px", textDecorationThickness: "2px", textDecorationColor: "#613E98", color: "#613E98", fontWeight: "900" }}>{props.header}</Typography>
                <Typography variant='body' sx={{ cursor: "pointer" }}>View All<KeyboardArrowRightIcon /></Typography>
            </Box>

            <hr className='h-1 w-[95%] ml-11 mt-[-32]' />

        </div>
    )
}

export default Section;