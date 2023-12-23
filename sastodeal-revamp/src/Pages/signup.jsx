import React from "react";
import SigninWithFacebook from "../Components/Signup/SigninWithFacebook";
import Header from "../Components/Signup/Header";
import SignUpForm from "../Components/Signup/Form";
import SigninWithGoogle from "../Components/Signup/SigninWithGoogle";
import SignupFooter from "../Components/Signup/footer";
import Or from "../Components/Signup/0r";
import SignupLogin from "../Components/Signup/signup-login";

function Signup() {
  return (
    <div>
      <Header/>
      <SignUpForm/>
      <Or/>
      <div className="flex gap-20 ml-40">
        <SigninWithGoogle/>
        <SigninWithFacebook/>
      </div>
      <SignupLogin/>
      <SignupFooter/>
    </div>
  );
}
export default Signup;
