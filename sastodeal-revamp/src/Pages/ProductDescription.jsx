import React from "react";
import ProductDetailedImage from "../Components/Product Description/ProductImage";
import ProductDetail from "../Components/Product Description/Detail";
import MiddleSection from "../Components/Product Description/Middlesection";
import ProductReviews from "../Components/Product Description/ProductReviews";
import MightAlsoLike from "../Components/Product Description/MightAlsoLike";

function ProductDescription() {
  return (
    <div>
      <div className="flex">
        <ProductDetailedImage/>
        <ProductDetail/>
      </div>
      <MiddleSection/>
      <ProductReviews/>
      <MightAlsoLike/>
    </div>
  );
}
export default ProductDescription;
