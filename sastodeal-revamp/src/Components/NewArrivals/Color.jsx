import React from 'react'
import Dropdown from './Dropdown';
import { Box } from '@mui/material';

const Size = () => {
    const [dropdownlogic, setdropdownlogic] = React.useState(false)
    const handledropdown = () => {
        setdropdownlogic(!dropdownlogic);
    }

    var details = [
        "bg-[#000000]",
        "bg-[#FFF]",
        "bg-[#F26060]","bg-[#556FF6]","bg-[#7C3FFF]","bg-[#37BC7C]","bg-[#E09A32]","bg-[#E4E4E4]","bg-[#F00]","bg-[#F0F364]"
    ]

    return (
        <div>

            <Box onClick={handledropdown}>
                <Dropdown header="Color" />
            </Box>

            <div
                className={`${dropdownlogic ? "" : "hidden"} grid grid-cols-6 gap-2 text-center m-5`}
            >
                    {
                        details.map((items) => {
                            return (
                                <Box className={` ${items} border border-[#E4E4E4] p-2 cursor-pointer hover:border-[#7C3FFF] h-8 w-8 rounded-full`}>
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