import React from "react";

function SignupFooter() {
  return (
    <div>
        <div className="flex ml-60 mt-10 mb-20 " >
            <p className="text-lg mr-3"> Already a member?</p>
            <button className="bg-[#613E98] text-white  font-bold py-2 px-4 rounded-lg justify-center">Log In</button>
        </div>
      <div className="flex ml-40  mb-20">
        <div className="text-[#45A69B] text-lg mr-20">Help</div>
        <div className="text-[#45A69B] text-lg mr-20">Privacy</div>
        <div className="text-[#45A69B] text-lg">Terms</div>
      </div>
      <div className="text-white mt-20">vcsdg</div>
    </div>
  );
}

export default SignupFooter;
