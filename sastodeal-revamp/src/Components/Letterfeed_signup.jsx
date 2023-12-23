import React from 'react'
import { Box, Typography } from "@mui/material"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Paper } from '@mui/material';



const Letterfeed_signup = () => {
    return (
        <div className=' relative'>
            <Box sx={{ display: "flex", justifyContent: "space-around", backgroundColor: "#613E98", p: 5, m:10, borderRadius: "20px",mb:[-10]}}>
                <Box className=" w-2/5  text-white">
                    <Typography variant='h4'  sx={{ fontWeight: "500", fontSize: 38,lineHeight:"60px" }}>Sign Up Now So Your Selected Item Are Saved To Your Personal Cart.</Typography>
                </Box>

                <Box>
                    {/* INPUT EMAIL ADDRESS */}
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , borderRadius:"20px",mt:4,mb:2}}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <MailOutlineIcon/>
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Enter your email address"
                            // inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Paper>

                    <button className='bg-white w-full rounded-2xl h-[40px] font-semibold text-lg hover:bg-[#f2f2f2] mb-5'>Sign Up</button>

            
                </Box>
            </Box>
        </div>
    )
}

export default Letterfeed_signup;