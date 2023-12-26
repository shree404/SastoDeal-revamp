import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import image2 from "../image/image2.png";
import image5 from "../image/image5.png";
import image6 from "../image/image6.png";
import image7 from "../image/image7.png";

function ProductDetailedImage() {
  return (
    <div>
      <div className="flex gap-4">
        <div>
        <img
          src={image2}
          alt="Product 1"
          className=" rounded-lg shadow-md mb-4"
        />
        <img
          src={image5}
          alt="product 2"
          className=" rounded-lg shadow-md mb-4"
        />
        <img
          src={image6}
          alt="productlarge"
          className=" rounded-lg shadow-md mb-4"
        />
        </div>
        <div>
          <img src={image7} alt="product 3" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailedImage;
