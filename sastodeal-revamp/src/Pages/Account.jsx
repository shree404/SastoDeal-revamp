// Account.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/user/`;
    const userId = localStorage.getItem("userId");

    if (!userId) {
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

  return (
    <div>
      <h1>Account Information</h1>
      {user ? (
        <div>
          <p>ID: {user._id}</p>
          <p>
            Name: {user.firstname} {user.lastname}
          </p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Role: {user.role}</p>
          <p>Created At: {user.createdAt}</p>
          <p>Updated At: {user.updatedAt}</p>
          {/* Add more details based on your user schema */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
      <button
        className="bg-[#613E98] text-white  font-bold py-2 px-8 flex justify-center rounded-lg text-lg mb-4"
        onClick={logoutUser}
      ></button>
    </div>
  );
};

export default Account;
