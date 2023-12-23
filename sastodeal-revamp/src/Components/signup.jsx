import React from "react";
import SigninWithFacebook from "./Signup/SigninWithFacebook";
import Header from "./Signup/Header";
import SignUpForm from "./Signup/Form";
import SigninWithGoogle from "./Signup/SigninWithGoogle";
import SignupFooter from "./Signup/footer";
import Or from "./Signup/0r";

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
      <SignupFooter/>
    </div>
  );
}
export default Signup;
