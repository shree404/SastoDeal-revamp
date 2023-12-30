import React, { useState, useEffect } from "react";
import Ratings from "../NewArrivals/Ratings";
//import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";

function ProductDetail(props) {
  const fetchedProducts = props.data;
  console.log("fetched image", fetchedProducts);
  const [quantity, setQuantity] = useState(1);

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
      <div>
        <h2 className="text-black font-bold text-2xl mb-5">
          {fetchedProducts.title}
        </h2>
      </div>
      <div className="flex gap-2">
        <Stack spacing={1}>
          <Ratings name="half-rating" rating={fetchedProducts.totalrating} />
        </Stack>
      </div>
      <div className="flex mt-5">
        <p className="text-black font-bold text-2xl mr-2">
          {fetchedProducts.price - fetchedProducts.price * 0.2}
        </p>
        <p className="text-[#ABAFB2] line-through text-2xl font-bold mr-4">
          Rs {fetchedProducts.price}
        </p>
        <div>
          <button className="text-[#FF3333] bg-[#FF3333-10%]  flex justify-center rounded-lg ">
            {" "}
            -20%
          </button>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <p className="">{fetchedProducts.description}</p>
      </div>
      <div>
        <hr className="border-t-30 border-black-500 my-4 w-full  mr-7"></hr>
      </div>
      <div className="mb-5">
        <p>Select Colors</p>
      </div>
      <div className="mb-5">
        <button className="w-8 h-8 rounded-full border border-gray bg-[#4F4631] opacity-100 mr-2"></button>
        <button className="w-8 h-8 rounded-full border border-gray bg-[#314F4A] opacity-100 mr-2"></button>
        <button className="w-8 h-8 rounded-full border border-gray bg-[#31344F]"></button>
      </div>
      <div>
        <hr className="border-t-30 border-black-500 my-4 w-full  mr-7"></hr>
      </div>
      <div>
        <p className="mb-5"> Choose Size</p>
      </div>
      <div className="flex mb-5">
        <button className="bg-[#F0F0F0] text-black   py-2 px-4 flex justify-center rounded-xl mr-2 hover:bg-[#613E98] hover:text-white">
          Small{" "}
        </button>

        <button className="bg-[#F0F0F0] text-black   py-2 px-6 flex justify-center rounded-2xl mr-2 hover:bg-[#613E98] hover:text-white">
          Medium{" "}
        </button>
        <button className="bg-[#F0F0F0] text-black  py-2 px-4 flex justify-center rounded-2xl mr-2 hover:bg-[#613E98] hover:text-white">
          Large{" "}
        </button>
        <button className="bg-[#F0F0F0] text-black   py-2 px-6 flex justify-center rounded-2xl hover:bg-[#613E98] hover:text-white">
          X-Large{" "}
        </button>
      </div>
      <div>
        <hr className="border-t-30 border-black-500 my-4 w-full  mr-7"></hr>
      </div>

      <div className="flex gap-7 mt-7">
        <div className="bg-[#F0F0F0] rounded-2xl p-2">
          <button
            onClick={decreaseValue}
            className="px-3 py-1 bg-[#F0F0F0]-200 rounded-2xl "
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="px-3 py-1 border border-[#F0F0F0]-300 bg-[#F0F0F0] text-black text-center w-16"
          />
          <button
            onClick={increaseValue}
            className="px-3 py-1 bg-[#F0F0F0] rounded-r "
          >
            +
          </button>
        </div>

        <div>
          <button className="bg-[#613E98] text-white  font-bold py-2 px-10 flex justify-center rounded-lg text-lg">
            Buy Now
          </button>
        </div>
        <div>
          <button className="bg-[#613E98] text-white  font-bold py-2 px-10 flex justify-center rounded-lg text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
