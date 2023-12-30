import React, { useEffect, useState } from "react";
import ProductDetailedImage from "../Components/Product Description/ProductImage";
import ProductDetail from "../Components/Product Description/Detail";
import MightAlsoLike from "../Components/Product Description/MightAlsoLike";
import ProductDetailHeader from "../Components/Product Description/ProductDEtailHeader";
import Tabs from "../Components/Product Description/Tabs";
import { useLocation } from "react-router-dom";
import ProductImage from "../Components/Product Description/ProductImage";
import axios from "axios";

function ProductDescription() {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  // Get the location object, which contains information about the current URL
  const location = useLocation();

  // Extract the id parameter from the search string in the URL
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `${process.env.REACT_APP_API_BASE_URL}/product/${productId}`;
        const response = await axios.get(apiUrl);
        setFetchedProducts(response.data);
        console.log("Products:", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div className="ml-20">
      <ProductDetailHeader data={fetchedProducts} />
      <div className="flex justify-around">
        {/* <ProductDetailedImage data={fetchedProducts} /> */}
        <ProductImage data={fetchedProducts} />
        <ProductDetail data={fetchedProducts} />
      </div>
      <Tabs />
      <MightAlsoLike />
    </div>
  );
}
export default ProductDescription;
