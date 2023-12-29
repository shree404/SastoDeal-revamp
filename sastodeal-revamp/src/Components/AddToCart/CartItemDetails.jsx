import React from 'react'
import { Box } from "@mui/material"

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import img1 from "../../Assests/Cart/img1.png"
import img2 from "../../Assests/Cart/img2.png"
import img3 from "../../Assests/Cart/img3.png"


var details = [
    {
        name: "Blue Flower Print Crop Top",
        color: "Yellow",
        size: "M",
        price: 2900,
        image: img1
    },
    {
        name: "Levender Hoodie",
        color: "Levender",
        size: "XXL",
        price: 2900,
        image: img2
    },{
        name: "Black Sweatshirt",
        color: "Black",
        size: "XXL",
        price: 2900,
        image: img3
    }
]
const CartItemDetails = () => {
    return (
        <div className = "m-10">
            <div className='bg-[#45A69B] text-white font-bold grid grid-cols-6 p-5 space-x-10'>
                <h1 className = "w-[120%]">PRODUCT DETAILS</h1>
                <h1> PRICE</h1>
                <h1>QUANTITY</h1>
                <h1>SHIPPING</h1>
                <h1>SUBTOTAL</h1>
                <h1>ACTION</h1>
            </div>

            <div>
                {
                    details.map((items) => {
                        return (
                            <Items detail={items} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const Items = (props) => {
    const [quantity, setQuantity] = React.useState(1);

    const decreaseValue = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseValue = () => {
      setQuantity(quantity + 1);
    };
    return (
        <div>
            <Box className = "grid grid-cols-6 p-5 gap-5 align-text-bottom space-x-10">
                <Box className="grid grid-cols-2 space-x-2 w-[110%]">
                    <img src={props.detail.image} alt="Image" />
                    <div>
                        <h1 className="text-[#3C4242] text-md font-bold">{props.detail.name}</h1>
                        <p className="text-[#3C4242]">Color:{props.detail.color}</p>
                        <p className="text-[#3C4242]">Size:{props.detail.size}</p>
                    </div>
                </Box>

                <Box className = "text-[#3C4242] font-semibold mt-10">
                    {props.detail.price}
                </Box>

                <Box>
                    <div className="bg-[#F0F0F0] rounded-2xl p-2  flex w-20  mt-8">
                        <button onClick={decreaseValue} className="px-2 py-0.5 bg-[#F0F0F0]-200 rounded-2xl ">-</button>
                        <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                            className=" py-0.5 border border-[#F0F0F0]-300 bg-[#F0F0F0] text-black text-center w-5"
                        />
                        <button onClick={increaseValue} className="px-1 py-0.5 bg-[#F0F0F0] rounded-r ">+</button>
                    </div>
                </Box>

                <Box className= "font-bold text-[#BEBCBD]  mt-10"> FREE</Box>

                <Box className = "text-[#3C4242] font-semibold mt-10">Rs.{props.detail.price}</Box>

                <Box>
                    <DeleteOutlineIcon className = "text-[#613E98] font-semibold mt-10"/>
                </Box>
            </Box>
            <hr className = "h-2 w-full text-[#BEBCBD] m-5 ml-16"/>
        </div>
    )
}

export default CartItemDetails;