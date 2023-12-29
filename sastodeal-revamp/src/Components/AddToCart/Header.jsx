import React from 'react'
import {Link} from "react-router-dom"
import Breadcrumb from './Breadcrumbs';
import { Box, Typography } from '@mui/material';


const Header = () => {
    return (
        <div className = "flex flex-col gap-5 m-10">

            <Breadcrumb />
            <Box>
                <Typography className='text-[#807D7E]'>Please fill in the fields below and click place order to complete your purchase!</Typography>
                <Typography className="text-[#807D7E] flex">Already registered? <Link to ="/login"><p className='text-[#613E98] font-semibold'>Please login here</p></Link></Typography>
            </Box>
            
        </div>
    )
}

export default Header;