import React from "react";

function MiddleSection() {
  return (
    <div>
      <div className="flex">
        <p className="text-[#ABAFB2] mr-10">Product Details</p>
        <p className="text-[#ABAFB2] mr-10">Rating and Reviews</p>
        <p className="text-[#ABAFB2] mr-10">FAQs</p>
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
