import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUpForm() 
{
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmpassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();
      console.log("Registration successful:", result);
      setError("Registration successful");

      // Clear form data after successful registration
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
      });

      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Registration failed", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="ml-40">
      <div>
        <h2 className="text-[#45A69B] text-3xl mb-8">Create your Account</h2>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        action="submit"
        method="post"
        onSubmit={handleSubmit}
        className="mb-2 gap-20"
      >
        <div className="flex gap-20">
          <span>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  placeholder="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
            </Box>
          </span>
          <span>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </Box>
          </span>
        </div>
        <div className="flex gap-20">
          <span>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </Box>
          </span>
          <span>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Phone number"
                  placeholder="phone number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </Box>
          </span>
        </div>
        <span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="password"
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </Box>
        </span>
        <span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Confirm Password"
                placeholder="Confirm Password"
                name="confirmpassword"
                type="password"
                value={formData.confirmpassword}
                onChange={handleChange}
              />
            </div>
          </Box>
        </span>
      </form>
      <div className="text-lg mb-4">
        <div className="flex mb-1">
          <input
            type="checkbox"
            name="terms&condition"
            id="terms&condition"
            className="w-4 h-4 mr-1"
          />{" "}
          <span className="text-[#ABAFB2] mr-1">
            Creating an account means you're okay with our{" "}
          </span>
          <span className="text-[#613E98] ">
            {" "}
            Terms of Service Privacy Policy
          </span>
          <span className="text-[#ABAFB2] "> , and </span>
        </div>
        <div className="mb-2">
          <span className="text-[#ABAFB2] mr-1"> our default</span>
          <span className="text-[#613E98]"> Notification Settings.</span>
        </div>
      </div>
      <div className=" mb-4 flex gap-10 ">
        <button
          className="bg-[#613E98] text-white  font-bold py-2 px-8 flex justify-center rounded-lg text-lg"
          onClick={handleSubmit}
        >
          Register
        </button>
        <button className="text-black bg-white border-[#613E98] font-bold py-2 px-6 flex justify-center rounded-lg ">
          Back
        </button>
      </div>
      <div>
        <div className="flex mb-1">
          <span className="mr-1 text-[#ABAFB2]">
            {" "}
            This site is protected by reCAPTCHA and the google
          </span>
          <span className="text-[#613E98] mr-1"> Privacy Policy</span>
          <span className="mr-1 text-[#ABAFB2]"> and</span>
          <span className="text-[#613E98] mr-1">Terms of</span>
        </div>
        <div>
          <span className="text-[#613E98]">Service </span>
          <span className="text-[#ABAFB2]">apply.</span>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
