import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import frame from '../image/Frame.png';
import vector from '../image/Vector.png';

function ProductReviews() {
  return (
    <div>
      <div className="">
        <div className="flex">
        <h2 className="text-black font-bold text-xl "> All Reviews</h2>
        <p className="text-[#ABAFB2]">(451)</p>
        </div>
        <div className="flex justify-end gap-3 mb-4 mr-20" >
          <button className="bg-[#F0F0F0] flex justify-center rounded-lg py-2 px-2 mr-2">
            <img src={frame} alt="filter option" />
          </button>
          <button className="bg-[#F0F0F0] text-black font-bold flex py-2 px-4 justify-center rounded-lg mr-2">
            Latest
          </button>
          <button className="bg-[#613E98] text-white  font-bold py-2 px-8 flex justify-center rounded-lg ">Write a Review</button>
        </div>
      </div>
      <div className="flex gap-20">
      <div>
       <div className="bg-white p-4 rounded shadow-md ">
        <div className="flex">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={4.5}
                    precision={0.5}
                  />
                </Stack>
                <button className="bg-white text-black text-lg font-bold px-2 py-2 rounded-full ">...</button>
        </div>
                <div className="flex gap-4">
                  <h2 className="text-black font-bold text-lg ">Samantha D.</h2>
                  <img src={vector} alt="green tick" className="mt-2" />
                </div>
                <div>
                <span className="text-s text-[#ABAFB2] text-60%">
                  <p>"I absolutely love this t-shirt! The design is unique and the fabric feels </p> <p> so comfortable. As a fellow designer, I appreciate the attention to </p> <p> detail. It's become my favorite go-to shirt."</p>
                </span>
              </div>
              <div>
                <p className="text-[#ABAFB2] mt-2">Posted on August 14, 2023 </p>
              </div>
        </div>
      </div>
      <div>
       <div className="bg-white p-4 rounded shadow-md ">
        <div className="flex">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={4}
                    precision={0.5}
                  />
                </Stack>
                <button className="bg-white text-black text-lg font-bold px-2 py-2 rounded-full">...</button>
        </div>
                <div className="flex gap-4">
                  <h2 className="text-black font-bold text-lg ">Alex M.</h2>
                  <img src={vector} alt="green tick" className=" mt-2" />
                </div>
                <div>
                <span className="text-s text-[#ABAFB2] text-60% ">
                  <p>""The t-shirt exceeded my expectations! The colors are vibrant and </p> <p> the print quality is top-notch. Being a UI/UX designer myself, I'm quite</p> <p> picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                </span>
              </div>
              <div>
                <p className="text-[#ABAFB2] mt-2">Posted on August 15, 2023 </p>
              </div>
        </div>
      </div>
      
      </div>
        <div className="flex justify-center">
          <button className="bg-white border-black text-black font-bold  py-2 px-6 flex justify-center rounded-lg mt-7 mb-7">
            {" "}
            Load More Reviews
          </button>
        </div>
      </div>
  );
}
export default ProductReviews;
