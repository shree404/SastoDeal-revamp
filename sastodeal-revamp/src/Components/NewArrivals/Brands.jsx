import React from 'react'
import {Box} from "@mui/material"

import Dropdown from './Dropdown'

const Brands = () => {
    return (
        <div>
            <Box >
                <Dropdown header="Brands" />
            </Box>
            
            <hr className='h-1 w-80% text-[#E4E4E4] mt-2 mb-2' />

        </div>
    )
}

export default Brands