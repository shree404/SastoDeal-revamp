import React from "react";
import ProductDetailedImage from "../Components/Product Description/ProductImage";
import ProductDetail from "../Components/Product Description/Detail";
import MightAlsoLike from "../Components/Product Description/MightAlsoLike";
import ProductDetailHeader from "../Components/Product Description/ProductDEtailHeader";
import Tabs from "../Components/Product Description/Tabs"

function ProductDescription() {
  return (
    <div className="ml-20">
      <ProductDetailHeader/>
      <div className="flex gap-10">
        <ProductDetailedImage/>
        <ProductDetail/>
      </div>
      <Tabs/>
      <MightAlsoLike/>
    </div>
  );
}
export default ProductDescription;
