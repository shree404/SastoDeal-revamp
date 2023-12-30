import React, { useEffect, useState } from "react";
import arrow from "../image/arrow.png";
import axios from "axios";

function ProductDetailHeader(props) {
  const fetchedProducts = props.data;

  //console.log("fetched products: ", fetchedProducts);
  return (
    <div className="mt-5 mb-5">
      <div className="flex gap-3">
        <p className="text-[#ABAFB2]">Home</p>
        <p>
          <img src={arrow} alt="arrow" className="h-5 w-5" />
        </p>
        <p className="text-[#ABAFB2]">{fetchedProducts.category}</p>
        <p>
          <img src={arrow} alt="arroww" className="h-5 w-5" />
        </p>
        <p className="text-black font-bold">{fetchedProducts.title}</p>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
