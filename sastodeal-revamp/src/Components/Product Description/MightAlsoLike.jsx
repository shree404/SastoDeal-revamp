import React from "react";
import image31 from "../image/image31.png";
import image3 from "../image/image3.png";
import image7 from "../image/image7.png";
import image8 from "../image/image8.png";
import image9 from "../image/image9.png";
function MightAlsoLike() {
  return (
    <div>
      <div>
        <h2 className="text-black text-3xl font-bold flex justify-center ">You might also like</h2>
      </div>
      <div className="flex gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <img src={image8} alt="blue t-shirt" />
          <h2 className="text-black font-bold mb-2">T-shirt</h2>
          <h2 className="text-black  font-bold mb-2">Rs.500</h2>
          <hr className="border-t-30 border-black-500 my-4 w-full  mb-2"></hr>
          <p className="text-[#249B3E] font-bold">Save-Rs.300</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img src={image9} alt="Polo t-shirt" />
          <h2 className="text-black font-bold mb-2"> Polo Tshirt</h2>
          <h2 className="text-black  font-bold mb-2">Rs.1499</h2>
          <hr className="border-t-30 border-black-500 my-4 w-full  mb-2"></hr>
          <h2 className="text-[#249B3E] font-bold">Save-Rs.100</h2>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img src={image31} alt="Red set polo t-shirt" />
          <h2 className="text-black font-bold mb-2"> Red Set Poloshirt</h2>
          <div className="flex">
          <h2 className="text-black  font-bold mr-2">Rs.1699</h2>
          <h2 className="text-black line-through ">Rs.2499</h2>
          </div>
          <hr className="border-t-30 border-black-500 my-4 w-full  mb-2"></hr>
          <h2 className="text-[#249B3E] font-bold">Save-Rs.700</h2>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img src={image31} alt=" t-shirt" />
          <h2 className="text-black font-bold mb-2"> T-shirt</h2>
          <div className="flex">
          <h2 className="text-black  font-bold mr-2">Rs.1200</h2>
          <h2 className="text-black line-through ">Rs.1500</h2>
          </div>
          <hr className="border-t-30 border-black-500 my-4 w-full  mb-2"></hr>
          <h2 className="text-[#249B3E] font-bold">Save-Rs.300</h2>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <img src={image31} alt="Red Shirt" />
          <h2 className="text-black font-bold mb-2"> Red Shirt</h2>
          <div className="flex">
            <h2 className="text-black  font-bold mr-2">Rs.1699</h2>
            <h2 className="text-black line-through ">Rs.1899</h2>
          </div>
          <hr className="border-t-30 border-black-500 my-4 w-full  mb-2"></hr>
          <div>
            <h2 className="text-[#249B3E] font-bold">Save-Rs.200</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MightAlsoLike;
