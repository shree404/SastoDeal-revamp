import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Pagination } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Skeleton from '@mui/material/Skeleton';

import products from '../../Assests/NewArrivals/product'
import Ratings from './Ratings'
import Breadcrumb from './Breadcrumb';
import Filters from './Filters'


// Import Axios for making API requests
import axios from 'axios';


const Products = () => {
    const [grid, setGrid] = useState('grid-cols-3');
    const [grid3open, setGrid3open] = useState(true);
    const [loading, setLoading] = useState(true);
    const [fetchedProducts, setFetchedProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/product`);
          setFetchedProducts(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchData();
    }, []);

  const handle_grid3 = () => {
    setGrid('grid-cols-3');
    setGrid3open(true);
  };

  const handle_grid2 = () => {
    setGrid('grid-cols-2');
    setGrid3open(false);
  };

  return (
    <Box className="flex justify-around m-10">
      {/* FOR FILTER VIEW IN LEFT SIDE */}
      <Box>
        <Filters />
      </Box>

      {/* FOR PRODUCT VIEW ON RIGHT SIDE */}
      <Box>
        {/* BREADCRUMBS OF PRODUCT */}
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                    {/* BREADCRUMBS */}
                    <Breadcrumb separator="/" color="text.primary" />
                    {/* GRID CONTROLS */}
                    <Box>
                        <GridViewIcon
                            sx={{ cursor: "pointer", border: "1px solid #E4E4E4", fontSize: "40px", p: .2 }} onClick={handle_grid2}
                            className={`${grid3open ? "text-[#E4E4E4]" : "text-[#7C3FFF]"}`}

                        />
                        <AppsIcon
                            sx={{ cursor: "pointer", border: "1px solid #E4E4E4", fontSize: "40px", p: .2 }} onClick={handle_grid3}
                            className={` ${grid3open ? "text-[#7C3FFF]" : "text-[#E4E4E4]"}`}

                        />
                    </Box>

                    {/* SORT FUNCTIONALITY */}
                    <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2, border: "1px solid #E4E4E4", p: 1, cursor: "pointer" }}>
                        <Typography>Sort By: Featured</Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                </Box>

        {/* PRODUCT GRID */}
        <Box>
          <div className={`grid ${grid} ${grid3open ? 'gap-x-3' : 'gap-x-40'} mt-10`}>
            {products.map((item) => (
              <Link to={`/product/${item._id}`} key={item._id}>
                <Box className="hover:shadow-lg m-auto cursor-pointer mb-10">
                  <div>
                    {loading ? (
                      <Skeleton variant="rectangular" width={250} height={300} />
                    ) : (
                      <img src={item.image} alt="" />
                    )}
                  </div>
                  <Box sx={{ p: 2 }}>
                    <div className="text-lg font-bold text-[#1C1C1C]">
                      {loading ? (
                        <Skeleton variant="rectangular" width={150} height={40} sx={{ mt: 1 }} />
                      ) : (
                        <h1>{item.name}</h1>
                      )}
                      <div className="flex gap-10">
                        {loading ? (
                          <Skeleton variant="rectangular" width={100} height={10} sx={{ mt: 1 }} />
                        ) : (
                          <>
                            <p>Rs. 99.50</p>
                            <span className="text-[#8B96A5] font-thin line-through">Rs.1128.00</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex">
                      {loading ? (
                        <Skeleton variant="rectangular" width={150} height={10} sx={{ mt: 1 }} />
                      ) : (
                        <>
                          <Ratings />
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
        <Box sx={{ display: 'flex', color: '#1C1C1C', alignContent: 'end', gap: 5, ml: '50%' }}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", gap: 0.5, border: "1px solid #E4E4E4", p: .5, borderRadius: "5px" }}>
                        <Typography sx={{ textAlign: "center" }}>Show 10</Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    <Pagination count={3} variant="outlined" shape="rounded" />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
