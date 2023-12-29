import React from 'react'
import TextField from '@mui/material/TextField'
import { Box } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';

const BilingDetails = () => {
    return (
        <div className = "m-10">
            <div>
                <h1 className='text-2xl font-bold text-[#3C4242]'><span className='w-2 h-2 bg-[#613E98]'></span>Check Out</h1>
                <h1 className='text-lg font-semibold text-[#3C4242]'>Biling Details</h1>
            </div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />
                </div>


                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Country"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />
                </div>


                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="State"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Area"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Phone Number"
                        sx={{ backgroundColor: "#F6F6F6" }}
                    />
                </div>

                <button className="text-md text-white font-semibold bg-[#613E98] p-3 rounded-lg">Continue to delivery</button>

                <div>
                    <Checkbox required /><span>Save my information for a faster checkout</span>
                </div>


            </Box>
        </div>
    )
}

export default BilingDetails;