import React from "react";

function MiddleSection() {
  return (
    <div className="mt-4">
      
      <div className="flex gap-1/3">
        <p className="text-[#ABAFB2] text-60% mr-40 ml-40 text-ls">Product Details</p>
        <p className="text-[#ABAFB2] text-60% mr-40 ml-40 text-ls">Rating and Reviews</p>
        <p className="text-[#ABAFB2] text-60% mr-40 ml-40 text-ls ">FAQs</p>
      </div>
      <div className="flex">
        <hr className="border-t-30 border-black-500 my-4 w-1/3  mr-7"></hr>
        <hr className="border-t-30 border-black-500 my-4 w-1/3  mr-7"></hr>
        <hr className="border-t-30 border-black-500 my-4 w-1/3  mr-7"></hr>
      </div>
    </div>
  );
}
export default MiddleSection;
