import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ProductReviews() {
  return (
    <div>
      <div className="flex">
        <h2 className="text-black font-bold text-xl "> All Reviews</h2>
        <p className="text-[#ABAFB2]">(451)</p>
        <button></button>
      </div>
      <div className="">
        <div>
          <div className="bg-white p-4 rounded shadow-md">
            <div>
              <div className="flex">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={4.5}
                    precision={0.5}
                  />
                </Stack>
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-black rounded-full">
                  ...
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-black font-bold text-lg">Samantha D.</h2>
              <button className="text-white bg-[#01AB31] rounded-full  flex justify-center rounded-lg ">
                {" "}
                ✔
              </button>
            </div>
            <div>
              <p>
                "I absolutely love this t-shirt . The design is unique and the
                fabric feels
              </p>
              <p>
                {" "}
                so comfortable .As a fellow designer , I appreciate the
                attention to{" "}
              </p>{" "}
              <p>detail. It's become my favorite go-to shirt."</p>
              <p>Posted on August 14,2023</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <div className="flex">
              <div className="flex">
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={4} precision={0.5} />
                </Stack>
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-black rounded-full">
                  ...
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-black font-bold text-lg">Alex M.</h2>
              <button className="text-white bg-[#01AB31]rounded-full  flex justify-center rounded-lg ">
                {" "}
                ✔
              </button>
            </div>
            <div>
              <p>
                "The t-shirt exceeded my expectational! The colors are vibrant
                and the print quality is top-notch.Being a UI/UX designer
                myself, i'm quite picky about aesthetics , and this t-shirt
                definitaly getsa thumbs up from me."
              </p>
              <p>Posted on August 15,2023</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-white border-black text-black font-bold  py-2 px-6 flex justify-center rounded-lg">
            {" "}
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductReviews;
