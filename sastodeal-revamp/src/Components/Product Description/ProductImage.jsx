import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import image2 from "../image/image2.png";
import image5 from "../image/image5.png";
import image6 from "../image/image6.png";
import image7 from "../image/image7.png";
import axios from "axios";

function ProductDetailedImage(props) {
  const fetchedProducts = props.data;
  console.log("fetched image", fetchedProducts);

  const imageUrlArray = fetchedProducts.images; // Ensure fetchedProducts.images is defined
  const imageUrl = imageUrlArray ? imageUrlArray[0] : null;

  return (
    <div>
      {imageUrl && (
        <div className="flex">
          <div>
            <img
              src={imageUrl}
              alt="Product 1"
              className="rounded-lg shadow-md mb-4 w-[75%]"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailedImage;
