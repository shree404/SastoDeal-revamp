import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heart from '../image/heart.png';
import myorders from '../image/myorders.png';
import signout from '../image/signout.png';
import user from '../image/user.png';

function PersonalInfoSection(){
    const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/user/`;
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token ) {
      navigate("/login");
      return;
    }

    fetch(`${apiUrl}${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch user information: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.getaUser);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        navigate("/login");
      });
  }, [navigate]);

  const logoutUser = async () => {
    try {
      // You can make a request to the server for logout if needed
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/user/logout`,
        {
          method: "GET", // Adjust the method based on your server implementation
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        console.log("Logout successful");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }

    // Remove tokens and redirect to login
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

    return(
        <div>
            <div className='flex gap-4'>
            
            <div className="w-2 h-8 bg-[#613E98] rounded-lg shadow-md"> </div>
            {user ? (
  <p className='text-3xl text-black font-bold'>{user.firstname} {user.lastname}</p>
) : (
  <p>Loading user information...</p>
)}

            </div>
            <div>
                <p className='text-[#807D7E] mt-5'>
                    Welcome to your account 
                </p>
            </div>
            <div className='mt-10 '>
                    <div className="w-30 h-10 bg-white rounded-lg ">
                    <div className='flex gap-4  ml-8'>
                    <img src= {myorders} alt= "order icon" />
                    <p className='text-[#807D7E] font-bold text-ls'> My Orders</p>
                    </div>
                </div>
                <div className="w-30 h-10 bg-white rounded-lg ">
                <div className='flex gap-4 mt-5 ml-8'>
                    <img src={heart} alt="Wishlist icon  " className='' />
                    <p className='text-[#807D7E] font-bold text-ls' >Wishlist</p>
                    </div>
                </div>
                <div className="w-30 h-10 bg-[#F6F6F6] rounded-lg mt-5 ">
                <div className='flex gap-8 '>
                <div className="w-1 h-10 bg-black rounded "></div>
                    <img src={user} alt="User icon"  className='h-6 w-6   '/>
                    <p className='text-[#807D7E] font-bold text-ls' >My info</p>
                    </div>
                </div>
                <div className="w-30 h-10 bg-white rounded-lg ">
                <div className='flex gap-4 mt-5 ml-8'>
                    <img src={signout} alt="Signout Icon" />
                    <p className='text-[#807D7E] font-bold text-ls' onClick={logoutUser} >Sign Out </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoSection;