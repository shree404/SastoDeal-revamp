import React from "react";
import Header from "../Components/Signup/Header";
import LoginForm from "../Components/Login/loginform";
import Or from "../Components/Signup/0r";
import SigninWithGoogle from "../Components/Signup/SigninWithGoogle";
import SigninWithFacebook from "../Components/Signup/SigninWithFacebook";
import NewSignup from "../Components/Login/newsignup";
import SignupFooter from "../Components/Signup/footer";

function Login() {
  return (
    <div>
      <Header />
      <LoginForm />
      <Or/>
      <div className="flex gap-20 ml-40">
        <SigninWithGoogle/>
        <SigninWithFacebook/>
      </div>
      <NewSignup/>
      <SignupFooter/>
    </div>
  );
}

export default Login;
