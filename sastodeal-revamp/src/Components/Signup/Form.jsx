import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-brands-svg-icons";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SignUpForm() {
  return (
    <div className="ml-10 ">
      <div>
        <h2 className="text-[#45A69B] text-2xl mb-6">Create your Account</h2>
      </div>
      <form action="submit" method="post" className="mb-2">
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
                  name="phonenumber"
                  type="tel"
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
                id="outlined-required"
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
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
              />
            </div>
          </Box>
        </span>
      </form>
      <div className="text-lg mb-3">
      <div className="flex mb-1">
        <input type="checkbox" name="terms&condition" id="terms&condition" className="w-4 h-4 mr-1"/>{" "}
          <span className="text-[#ABAFB2] mr-1">
            Creating an account means you're okay with our{" "}
          </span>

          <span className="text-[#613E98] ">
            {" "}
              Terms of Service Privacy Policy
          </span>
          <span className="text-[#ABAFB2] "> , and </span>
        </div >
        <div className="mb-2">
          <span className="text-[#ABAFB2] mr-1"> our default</span>
          <span className="text-[#613E98]"> Notification Settings.</span>
        </div>
      </div>
      <div className="  ">
        <button className="bg-[#613E98] text-white  font-bold py-2 px-8 flex justify-center rounded-lg text-lg mb-3">
          Register
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
