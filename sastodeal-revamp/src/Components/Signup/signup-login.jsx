import React from "react";
import { Link } from "react-router-dom"

function SignupLogin() {
    return (
        <div className="flex ml-60 mt-10 mb-20 " >
            <p className="text-lg mr-3"> Already a member?</p>
            <Link to="/login" onClick={() => { window.scrollTo(0, 0); }}>
                <button className="bg-[#613E98] text-white  font-bold py-2 px-4 rounded-lg justify-center">Log In</button>
            </Link>
        </div>
    )
}
export default SignupLogin;