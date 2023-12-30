//filters.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckboxList from "./CheckboxList";

import RadioList from "./RadioList";
import Size from "./Size";
import Color from "./Color";
import Brands from "./Brands";
import Price from "./Price";
import axios from "axios";

const Filters = ({ updateFilters }) => {
  const [filters, setFilters] = useState({
    //   department: [],
    category: [],
    //  size: [],
    color: [],
    brand: [],
    price: [],
  });

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleSaveFilters = async (selectedValue) => {
    try {
      // Convert the filters object into query parameters
      const queryParams = new URLSearchParams({
        ...filters,
        page: currentPage,
      });
      //console.log("Query Params",queryParams);
      console.log("Price :", filters.price);
      // Make a request to fetch filtered products from the backend
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/product?${queryParams}`
      );

      // Process the response (set products state, etc.)
      console.log("Filtered Products:", response.data);
      // Update the filters in the parent component
      updateFilters(filters);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  const handleResetFilters = () => {
    // Reset all filters to their initial state
    setFilters({
      //  department: [],
      category: [],
      //  size: [],
      color: [],
      brand: [],
      price: [],
    });
    // Reset the current page to 1
    setCurrentPage(1);
  };

  return (
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
          {/* <CheckboxList details={details_department} title="Department" onChange={(values) => setFilters({ ...filters, department: values })} /> */}
          <CheckboxList
            details={categoryOptions.map((category) => ({
              name: category.title,
            }))}
            title="Category"
            onChange={(values) => setFilters({ ...filters, category: values })}
          />
          {/* <Size onChange={(values) => setFilters({ ...filters, size: values })} /> */}
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
  );
};

export default Filters;
