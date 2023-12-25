import React from 'react'
import { Box, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Dropdown = (props) => {
  const [dropdownlogic, setdropdownlogic] = React.useState(false)

  const handledropdown = () => {
    setdropdownlogic(!dropdownlogic);
  }

  return (
    <div onClick={handledropdown} className = " p-3 hover:shadow-sm ">
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}  >
          <Typography variant='h6' sx={{ fontWeight: "500" }}>{props.header}</Typography>
          {
            dropdownlogic ? <KeyboardArrowDownIcon className='m-1' /> : <KeyboardArrowRightIcon className='m-1' />
          }
        </Box>
      </Box>
    </div>
  )
}

export default Dropdown;