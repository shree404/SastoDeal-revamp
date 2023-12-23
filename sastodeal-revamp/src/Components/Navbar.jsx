import {React , useEffect , useState} from 'react'
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

                <AppBar position='' style={{ background: '#613E98'}} className ={`${stickyClass}`}>
                    <StyleToolbar>
                        <Typography variant='h4' style={{ fontWeight: '800' }}>sastodeal.co</Typography>
                        <Typography variant='body'>Bazar<KeyboardArrowDownIcon /></Typography>
                        <Typography variant='body'>Stores</Typography>
                        <Typography variant='body'>New Arrivals</Typography>
                        <Typography variant='body'>Brands</Typography>


                        <Search><SearchSharpIcon color='action' /> <InputBase placeholder='Search for products...' sx={{ width: "90%" }} /></Search>
                        <ShoppingCartOutlined />
                        <FavoriteBorderOutlinedIcon />

                        <Typography variant='body'><span>Login</span> | <span>Signup</span><AccountCircleOutlinedIcon /></Typography>



                    </StyleToolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navbar;