import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Pagination, Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Skeleton from "@mui/material/Skeleton";
import Ratings from "./Ratings";
import Breadcrumb from "./Breadcrumb";

import CheckboxList from "./CheckboxList";

import RadioList from "./RadioList";
import Color from "./Color";
import Price from "./Price";
import axios from "axios";

const ProductsAndFilters = () => {
  const [grid, setGrid] = useState("grid-cols-3");
  const [grid3open, setGrid3open] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: [],
    color: [],
    brand: [],
    price: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `${process.env.REACT_APP_API_BASE_URL}/product?page=${currentPage}&limit=12`;

        // Build dynamic query parameters based on filters with values
        const queryParams = {};

        if (filters.category.length > 0) {
          queryParams.category = filters.category.join(",");
        }
        if (filters.color.length > 0) {
          queryParams.color = filters.color.join(",");
        }
        if (filters.brand.length > 0) {
          queryParams.brand = filters.brand.join(",");
        }
        // Handle price range logic
        if (filters.price.length > 0) {
          // Extract the price range values from the selected option
          const [minPrice, maxPrice] = filters.price.split("-");
          queryParams.price = `price[gte]=${minPrice}&price[lte]=${maxPrice}`;
        }
        // Append dynamic query parameters to the URL
        apiUrl += `&${new URLSearchParams(queryParams)}`;

        const response = await axios.get(apiUrl);
        setFetchedProducts(response.data);
        console.log("Products:", response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [filters, currentPage]);

  const handle_grid3 = () => {
    setGrid("grid-cols-3");
    setGrid3open(true);
  };

  const handle_grid2 = () => {
    setGrid("grid-cols-2");
    setGrid3open(false);
  };

  const handleFiltersUpdate = (newFilters) => {
    setFilters(newFilters);
    // Reset the current page to 1 when filters change
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    // Reset all filters to their initial state
    setFilters({
      category: [],
      color: [],
      brand: [],
      price: [],
    });
    // Reset the current page to 1
    setCurrentPage(1);
  };

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    // Fetch category options from the API
    const fetchCategoryOptions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/category`
        );
        setCategoryOptions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching category options:", error);
      }
    };

    // Fetch category options from the API
    const fetchBrandOptions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/brand`
        );
        setBrandOptions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching brand options:", error);
      }
    };

    fetchCategoryOptions();
    fetchBrandOptions();
  }, []);

  const handleSaveFilters = async () => {
    try {
      // Convert the filters object into query parameters
      const queryParams = new URLSearchParams({
        ...filters,
        page: currentPage,
      });

      // Make a request to fetch filtered products from the backend
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/product?${queryParams}`
      );

      // Process the response (set products state, etc.)
      console.log("Filtered Products:", response.data);
      // Update the filters in the parent component
      handleFiltersUpdate(filters);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  return (
    <Box className="flex justify-around m-10">
      {/* FOR FILTER VIEW IN LEFT SIDE */}
      <Box>
        <div>
          <Box>
            <div className="flex justify-between w-[100%]">
              <Typography variant="h6" sx={{ fontWeight: "500", ml: 1.5 }}>
                Filter
              </Typography>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: "#7C3FFF",
                  textDecorationColor: "#7C3FFF",
                  cursor: "pointer",
                }}
                onClick={handleResetFilters}
              >
                Reset All
              </Typography>
            </div>
            <hr className="h-2 w-80% text-[#E4E4E4] mt-10 mb-2" />

            <Box>
              <CheckboxList
                details={categoryOptions.map((category) => ({
                  name: category.title,
                }))}
                title="Category"
                onChange={(values) =>
                  setFilters({ ...filters, category: values })
                }
              />
              <Color
                onChange={(values) => setFilters({ ...filters, color: values })}
              />
              <RadioList
                details={brandOptions.map((brand) => ({ name: brand.title }))}
                title="Brand"
                onChange={(values) => setFilters({ ...filters, brand: values })}
              />
              <Price
                onChange={(values) => setFilters({ ...filters, price: values })}
              />
            </Box>

            <Button
              variant="outlined"
              style={{
                color: "#7C3FFF",
                borderColor: "#7C3FFF",
                width: "100%",
                padding: "10px",
              }}
              onClick={handleSaveFilters}
            >
              Save
            </Button>
          </Box>
        </div>
      </Box>

      {/* FOR PRODUCT VIEW ON THE RIGHT SIDE */}
      <Box>
        {/* BREADCRUMBS OF PRODUCT */}
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          {/* BREADCRUMBS */}
          <Breadcrumb separator="/" color="text.primary" />
          {/* GRID CONTROLS */}
          <Box>
            <GridViewIcon
              sx={{
                cursor: "pointer",
                border: "1px solid #E4E4E4",
                fontSize: "40px",
                p: 0.2,
              }}
              onClick={handle_grid2}
              className={`${grid3open ? "text-[#E4E4E4]" : "text-[#7C3FFF]"}`}
            />
            <AppsIcon
              sx={{
                cursor: "pointer",
                border: "1px solid #E4E4E4",
                fontSize: "40px",
                p: 0.2,
              }}
              onClick={handle_grid3}
              className={` ${grid3open ? "text-[#7C3FFF]" : "text-[#E4E4E4]"}`}
            />
          </Box>

          {/* SORT FUNCTIONALITY */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: 2,
              border: "1px solid #E4E4E4",
              p: 1,
              cursor: "pointer",
            }}
          >
            <Typography>Sort By: Featured</Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>

        {/* PRODUCT GRID */}
        <Box>
          <div
            className={`grid ${grid} ${
              grid3open ? "gap-x-3" : "gap-x-40"
            } mt-10`}
          >
            {fetchedProducts.map((item) => (
              <Link to={`/product/?id=${item._id}`} key={item._id}>
                <Box className="hover:shadow-lg m-auto cursor-pointer mb-10">
                  <div>
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        width={250}
                        height={300}
                      />
                    ) : (
                      <img src={item.images[0]} width={250} height={1} alt="" />
                    )}
                  </div>
                  <Box sx={{ p: 2 }}>
                    <div className="text-lg font-bold text-[#1C1C1C]">
                      {loading ? (
                        <Skeleton
                          variant="rectangular"
                          width={150}
                          height={40}
                          sx={{ mt: 1 }}
                        />
                      ) : (
                        <h1>{item.title}</h1>
                      )}
                      <div className="flex gap-10">
                        {loading ? (
                          <Skeleton
                            variant="rectangular"
                            width={100}
                            height={10}
                            sx={{ mt: 1 }}
                          />
                        ) : (
                          <>
                            <p>{item.price - item.price * 0.2}</p>
                            <span className="text-[#8B96A5] font-thin line-through">
                              {item.price}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex">
                      {loading ? (
                        <Skeleton
                          variant="rectangular"
                          width={150}
                          height={10}
                          sx={{ mt: 1 }}
                        />
                      ) : (
                        <>
                          <Ratings rating={item.totalrating} />
                          <FavoriteBorderIcon className="text-[#613E98]" />
                        </>
                      )}
                    </div>
                  </Box>
                </Box>
              </Link>
            ))}
          </div>
        </Box>

        {/* For PAGINATION */}
        <Box
          sx={{
            display: "flex",
            color: "#1C1C1C",
            alignContent: "end",
            gap: 5,
            ml: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: 0.5,
              border: "1px solid #E4E4E4",
              p: 0.5,
              borderRadius: "5px",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>Show 12</Typography>
            <KeyboardArrowDownIcon />
          </Box>
          <Pagination
            count={3} // Update this with the actual number of pages
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsAndFilters;
