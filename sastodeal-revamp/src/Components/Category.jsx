import React from 'react'
import { Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Category = () => {
    let category_item = ["Groceries", "Gaming Laptop", "Home & Kitchen", "Fashion", "Electronics", "Beauty", "Home Improvement", "Sports, Toys & Luggage"]
    return (
            <div className='flex gap-2 justify-around m-5'>
                {
                    category_item.map((items) => {
                        return <Box sx={{ backgroundColor: "whitesmoke", borderRadius: "30px", p: 1.5, cursor: "pointer" }} className="hover:bg-[#613E98] hover:text-white transition duration-700">{items}<KeyboardArrowDownIcon /></Box>
                    })
                }

            </div>

    )
}

export default Category;