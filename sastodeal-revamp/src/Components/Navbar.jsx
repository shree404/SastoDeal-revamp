import React from 'react'
import { AppBar, Box, InputBase, Toolbar, Typography, styled } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "30px",
    width: "40%",
    height: "40px",
    paddingTop: "5px"
}));

const Icons = styled(Box)(({ theme }) => ({
}))

const Navbar = () => {
    return (
        <div>
            {/* FOR UPPER NAVBAR */}
            <div className='flex justify-between bg-[#45A69B] p-1 pl-20 pr-11 max-sm:p-0 max-sm:text-sm'>
                <div>
                    <p>Welcome to SastoDeal.com! Enjoy Shopping</p>
                </div>

                <ul className='flex justify-evenly'>
                    <li>Vendor Login <span>| </span></li>
                    <li>Sell on Sastodeal <span>| </span></li>
                    <li>Raise a Ticket <span>| </span></li>
                    <li>Order Tracking</li>
                </ul>

            </div>

            {/* FOR LOWER  MAIN NAVBAR */}
            <div>

                <AppBar position='sticky'  style={{ background: '#613E98' }}>
                    <StyleToolbar>
                        <Typography variant='h5' style={{fontWeight:'800'}}>sastodeal.co</Typography>
                        <Typography variant='subtitle2'>Bazar<ArrowDropDownIcon /></Typography>
                        <Typography variant='subtitle2'>Stores</Typography>
                        <Typography variant='subtitle2'>New Arrivals</Typography>
                        <Typography variant='subtitle2'>Brands</Typography>


                        <Search><SearchSharpIcon color='action' /> <InputBase placeholder='Search for products...' /></Search>
                        <Icons><ShoppingCartOutlined /></Icons>
                        <Icons><FavoriteBorderOutlinedIcon /></Icons>

                        <Typography variant='subtitle2'><span>Login</span> | <span>Signup</span><AccountCircleOutlinedIcon /></Typography>



                    </StyleToolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navbar;