// Products.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Pagination } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Skeleton from "@mui/material/Skeleton";
import Ratings from "./Ratings";
import Breadcrumb from "./Breadcrumb";
import Filters from "./Filters";
import axios from "axios";

const Products = () => {
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

        const response = await axios.get(apiUrl);
        setFetchedProducts(response.data);
        console.log("Products:", response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [filters]);

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
  };

  return (
    <Box className="flex justify-around m-10">
      {/* FOR FILTER VIEW IN LEFT SIDE */}
      <Box>
        <Filters updateFilters={handleFiltersUpdate} />
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

export default Products;
