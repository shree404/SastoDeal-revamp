import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, InputBase, Toolbar, Typography, styled } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

const Navbar = () => {
    const [stickyClass, setStickyClass] = useState('sticky');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 175 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('sticky');
        }
    };
    return (
        <div>
            {/* FOR UPPER NAVBAR */}
            <div className='flex justify-between bg-[#45A69B] p-1 pl-20 pr-11 max-sm:p-0 max-sm:flex-col'>
                <div>
                    <p>Welcome to SastoDeal.com! Enjoy Shopping</p>
                </div>

                <ul className='flex justify-evenly '>
                    <li>Vendor Login <span>| </span></li>
                    <li>Sell on Sastodeal <span>| </span></li>
                    <li>Raise a Ticket <span>| </span></li>
                    <li>Order Tracking</li>
                </ul>

            </div>

            {/* FOR LOWER  MAIN NAVBAR */}
            <div>

                <AppBar position='' style={{ background: '#613E98' }} className={`${stickyClass}`}>
                    <StyleToolbar>
                        <Link to="/" onClick={() => { window.scrollTo(0, 0); }}>
                            <Typography variant='h4' style={{ fontWeight: '800' }}>sastodeal.com</Typography>
                        </Link>
                        <Link to="/bazar" onClick={() => { window.scrollTo(0, 0); }}>
                            <Typography variant='body'>Bazar<KeyboardArrowDownIcon /></Typography>
                        </Link>

                        <Link to = "/stores" onClick={() => { window.scrollTo(0, 0); }}><Typography variant='body'>Stores</Typography></Link>
                        <Link to="/newarrivals"
                            onClick={() => {
                                window.scrollTo(0, 0);

                            }}>
                            <Typography variant='body'>New Arrivals</Typography>
                        </Link>

                        <Link to="/brands" onClick={() => { window.scrollTo(0, 0); }}>
                            <Typography variant='body'>Brands</Typography>
                        </Link>


                        <Search className='max-md:hidden'><SearchSharpIcon color='action' sx ={{mr:2}} />

                            <InputBase placeholder='Search for products...' sx={{ width: "70%" }} />
                        </Search>

                        <Link to = {"/cart"}onClick={() => { window.scrollTo(0, 0); }}><ShoppingCartOutlined /></Link>

                        <Link to={"/favorite"} onClick={() => { window.scrollTo(0, 0); }}><FavoriteBorderOutlinedIcon /></Link>

                        <Typography variant='body'>
                            <Link to={"/login"} onClick={() => { window.scrollTo(0, 0); }}>
                                <span>Login</span></Link> |
                            <Link to={"/signup"} onClick={() => { window.scrollTo(0, 0); }}>
                                <span>Signup</span>
                            </Link>
                            <Link to = {"/account"} onClick={() => { window.scrollTo(0, 0); }}>
                                <AccountCircleOutlinedIcon sx = {{ml:1}} />
                            </Link>
                        </Typography>



                    </StyleToolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navbar;