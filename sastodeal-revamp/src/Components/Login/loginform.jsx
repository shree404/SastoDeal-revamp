import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(true);
  const navigate = useNavigate();

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };

  useEffect(() => {
    return () => {
      setIsMounted(false); // Update the isMounted state when the component unmounts
    };
  }, []);

  const navigateToDashboard = () => {
    if (isTokenValid()) {
      navigate("/"); // Redirect to home if the token is valid
    } else {
      navigate("/login"); // Redirect to login if the token is not valid
    }
  };

  const loginUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const userData = await response.json();
      console.log(userData);

      localStorage.setItem("token", userData.token);
      localStorage.setItem("userId", userData._id);

      // Check if the component is still mounted before navigating
      if (isMounted) {
        navigateToDashboard(); // Redirect after successful login
      }
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="ml-40">
      <div>
        <h2 className="text-[#45A69B] text-3xl mb-8">Login your Account</h2>
      </div>
      <form className="mb-2 gap-20">
        <span className="mb-5">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // value={formData.email} onChange={handleChange}
              />
            </div>
          </Box>
        </span>
        <span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // value={formData.password} onChange={handleChange}
              />
            </div>
          </Box>
        </span>
        <div className="flex gap-60 mt-5 mb-7">
          <p className="text-white "> dhd</p>
          <p className="text-white "> dhd</p>
          <p className="text-[#613E98] ">Forget Password ?</p>
        </div>
        <div className="flex gap-10">
          <button
            className="bg-[#613E98] text-white  font-bold py-2 px-8 flex justify-center rounded-lg text-lg mb-4"
            onClick={loginUser}
          >
            Login
          </button>
          <button className="text-black bg-white border-[#613E98] font-bold py-2 px-6 flex justify-center rounded-lg ">
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
