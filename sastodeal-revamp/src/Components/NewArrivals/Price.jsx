import React from 'react'
import { Box } from "@mui/material"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Dropdown from './Dropdown'

const Price = () => {

    const [dropdownlogic, setdropdownlogic] = React.useState(false)
    const handledropdown = () => {
        setdropdownlogic(!dropdownlogic);
    }

    return (
        <div>
            <Box onClick = {handledropdown}>
                <Dropdown header="Price" />
            </Box>

            <Box className={`${dropdownlogic ? "" : "hidden"} m-5`}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="price1"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="price1" control={<Radio  style={{color:"#FF9C72"}}/>} label="$10.00 - $49.00" />
                        <FormControlLabel value="pice2"  control={<Radio style={{color:"#FF9C72"}}/>} label="$50.00 - $99.00" />
                        <FormControlLabel value="price3" control={<Radio style={{color:"#FF9C72"}}/>} label="$100.00 - $199.00" />
                        <FormControlLabel value="price4" control={<Radio style={{color:"#FF9C72"}}/>} label="$200 and Up" />
                        
                    </RadioGroup>
                </FormControl>
            </Box>
            <hr className='h-1 w-80% text-[#E4E4E4] mt-2 mb-2' />

        </div>
    )
}

export default Price;