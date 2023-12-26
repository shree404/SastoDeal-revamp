import React from 'react'
import Dropdown from './Dropdown';
import { Box } from '@mui/material';

const Size = () => {
    const [dropdownlogic, setdropdownlogic] = React.useState(false)
    const handledropdown = () => {
        setdropdownlogic(!dropdownlogic);
    }

    var details = [
        "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"
    ]

    return (
        <div>

            <Box onClick={handledropdown}>
                <Dropdown header="Size" />
            </Box>

            <div
                className={`${dropdownlogic ? "" : "hidden"} grid grid-cols-4 gap-2 text-center m-5`}
            >
                    {
                        details.map((items) => {
                            return (
                                <Box className=" border border-[#E4E4E4] p-2 cursor-pointer hover:border-[#7C3FFF] ">
                                    {items}
                                </Box>
                            )
                        })
                    }
            </div>
            <hr className='h-1 w-80% text-[#E4E4E4] mt-2 mb-2' />

        </div>
    )
}

export default Size;