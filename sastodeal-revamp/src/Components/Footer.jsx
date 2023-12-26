import React from 'react'

import { Box, Container, Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import qr from "../Assests/qr.png"
import visa_card from '../Assests/visa_card.svg'
import mastercard from '../Assests/mastercard.svg'
import paypal from "../Assests/paypal.svg"
import ipay from '../Assests/ipay.svg'
import gpay from '../Assests/gpay.svg'



const Footer = () => {
    return (
        <>
            <Container sx={{bgcolor: '#F0F0F0', m:0,paddingTop:10}} maxWidth="xl">
                <Grid container  sx={{ m:0 , display:"flex",justifyContent:"space-around", margin:1.5}}>
                    <Grid item sx={{display:"flex"  ,flexDirection:"column", gap:2}}>
                        <Typography variant='h4' sx={{fontWeight:"800"}}>SastoDeal.com</Typography>
                        <Typography variant='body'>Sastodeal Pvt. Ltd. Pandol Marga,<br/> Lazimpat, Kathmandu</Typography>
                        <Box sx={{display:'flex',gap:3, marginTop:5 }}>

                            <TwitterIcon sx={{ width: "40px", height: "40px", p: "10px", bgcolor: 'white', borderRadius: "100%", color: 'black' }} />

                            <FacebookIcon sx={{ width: "40px", height: "40px", p: "10px", bgcolor: 'white', borderRadius: "100%", color: 'black' }} />

                            <InstagramIcon sx={{ width: "40px", height: "40px", p: "10px", bgcolor: 'white', borderRadius: "100%", color: 'black' }} />


                        </Box>



                    </Grid>

                    <Grid sx={{display:"flex", flexDirection:"column", gap:2}} item >
                        <Typography variant='h6' sx={{letterSpacing:"3px"}}>COMPANY</Typography>
                        <Typography variant='body'> About Us</Typography>
                        <Typography variant='body'> Careers @SD</Typography>
                        <Typography variant='body'> Advertise on SD</Typography>
                        <Typography variant='body'> Sell on SD</Typography>
                        
                    </Grid>

                    
                    <Grid sx={{display:"flex", flexDirection:"column", gap:3}} item >
                        <Typography variant='h6' sx={{letterSpacing:"3px"}}>CONTACT US</Typography>
                        <Typography variant='body'> Customer Care</Typography>
                        <Typography variant='body'> Delivery and Return</Typography>
                        <Typography variant='body'> Terms and Conditions</Typography>
                        <Typography variant='body'> Privacy Policy</Typography>
                        <Typography variant='body'>FAQs</Typography>
                        
                    </Grid>


                    
                    <Grid sx={{display:"flex", flexDirection:"column", gap:3}} item >
                        <Typography variant='h6' sx={{letterSpacing:'3px'}}>ACCOUNT</Typography>
                        <Typography variant='body'> Edit Account</Typography>
                        <Typography variant='body'> Manage Deliveries</Typography>
                        <Typography variant='body'> Orders</Typography>
                        <Typography variant='body'> Payments</Typography>
                        
                    </Grid>

                    <Grid item sx={{display:"flex" , flexDirection:"column" , gap:2}}>
                        <Typography variant='h6' sx={{letterSpacing:"2px"}}>For better Shopping <br/>experience Download <br/>Sastodeal app</Typography>
                        <Box>
                            <img src={qr}/>
                            <FavoriteBorderIcon sx={{marginLeft:7,marginTop:-40, backgroundColor:"white",height:30,width:30,p:.5}}/>
                        </Box>
                    </Grid>


                </Grid>
                
                <hr className='h-1 w-[90vw] bg-[rgba(0, 0, 0, 0.10)] m-0 mt-4'/>

                {/* FOR LOWER FOOTER SECTION */}
                <Grid container sx={{justifyContent:"space-between" , p:3}}>
                    <Typography>sastodeal © 2000-2023, All Rights Reserved</Typography>
                    <Box sx={{display:"flex"}}>
                        <img src={visa_card}/>
                        <img src={mastercard}  />
                        <img src={paypal} />
                        <img src={ipay}  />
                        <img src={gpay}  />
                    </Box>
                </Grid>
            </Container >
        </>
    )
}

export default Footer;