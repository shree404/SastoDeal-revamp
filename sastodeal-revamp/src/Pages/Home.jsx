import { React, useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

import Category from "../Components/Category";
import SmartPhoneSection from "../Components/SmartPhoneSection";
import Deals_Offers from "../Components/Deals_Offers";
import Top_Category from "../Components/Top_Category";
import DailyEssentials from "../Components/DailyEssentials";
import ElectronicsBrand from "../Components/ElectronicsBrand";

import banner1 from "../Assests/banner1.png";
import Letterfeed_signup from "../Components/Letterfeed_signup";
import Reviews from "../Components/Reviews";
const Home = () => {
  /*
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Use the effect to perform checks when the component mounts
    if (!token) {
      // If there is no token, redirect to the login page
      navigate("/login");
    }
  }, [navigate, token]);

  const handleLogout = async () => {
    try {
      // Make a request to the backend to log out the user
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/user/logout`,
        {
          method: "GET",
          credentials: "include", // Include credentials for cookies
        }
      );

      if (response.ok) {
        // Remove the token from localStorage
        localStorage.removeItem("token");
        // Add any additional logout logic (e.g., redirect to login)
        navigate("/login");
      } else {
        // Handle logout error
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
*/
  let [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      <Category />
      <div>
        {Loading ? (
          <Skeleton variant="rectangular" width="100%" height={400} />
        ) : (
          <img src={banner1} alt="home_banner" className=" cursor-pointer" />
        )}
      </div>
      <Deals_Offers />
      <Top_Category />
      <SmartPhoneSection />
      <Reviews />
      <DailyEssentials />
      <ElectronicsBrand />
      <Letterfeed_signup />
    </div>
  );
};

export default Home;
