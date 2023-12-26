import React ,{useState} from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ProductDetail() {
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
          One Life Graphics T-shirt
        </h2>
      </div>
      <div className="flex gap-2">
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
        </Stack>
        <div className="flex">
          <p className="text-black">4.5/</p>
          <p className="text-[#ABAFB2]">5</p>
        </div>
      </div>
      <div className="flex mt-5">
        <p className="text-black font-bold text-2xl mr-2">Rs.260</p>
        <p className="text-[#ABAFB2] line-through text-2xl font-bold mr-4">
          Rs.300
        </p>
        <div>
          <button className="text-[#FF3333] bg-[#FF3333-10%]  flex justify-center rounded-lg ">
            {" "}
            -40%
          </button>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <p className="">
          This graphic t-shirt which is perfect for any occasion . Crafted from
          a soft and{" "}
        </p>
        <p>breathable fabric , it offers superior comfort and style.</p>
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
        <button className="bg-[#ABAFB2] text-black   py-2 px-4 flex justify-center rounded-lg mr-2">
          Small{" "}
        </button>

        <button className="bg-[#ABAFB2] text-black   py-2 px-6 flex justify-center rounded-lg mr-2">
          Medium{" "}
        </button>
        <button className="bg-[#ABAFB2] text-black  py-2 px-4 flex justify-center rounded-lg mr-2 ">
          Large{" "}
        </button>
        <button className="bg-[#ABAFB2] text-black   py-2 px-6 flex justify-center rounded-lg ">
          X-Large{" "}
        </button>
      </div>
      <div>
        <hr className="border-t-30 border-black-500 my-4 w-full  mr-7"></hr>
      </div>
      <div className="flex gap-7 mt-7">
      <div>
        <button onClick={decreaseValue} className="px-3 py-1 bg-[#ABAFB2]-200 rounded-l ">-</button>
        <input
          type="text"
          value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="px-3 py-1 border border-[#ABAFB2]-300 bg-[#ABAFB2] text-black text-center w-16"
        />
        <button onClick={increaseValue} className="px-3 py-1 bg-[#ABAFB2]-200 rounded-r ">+</button>
      </div>
      <div>
        <button className="bg-[#613E98] text-white  font-bold py-2 px-10 flex justify-center rounded-lg text-lg">Buy Now</button>
      </div>
      <div>
        <button className="bg-[#613E98] text-white  font-bold py-2 px-10 flex justify-center rounded-lg text-lg">Add to Cart</button>
      </div>
      </div>
    </div>
  );
}

export default ProductDetail;
