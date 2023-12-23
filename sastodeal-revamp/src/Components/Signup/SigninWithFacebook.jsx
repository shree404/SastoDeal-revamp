import React from 'react';
import { FontAwesomeIcon}   from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function SigninWithFacebook(){
    return(
        <div className="flex items-center justify-center bg-white-700 text-white rounded-md p-2 border border-[#45A69B] h-16 w-64">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 mr-5 ml-6 text-blue-600"/>
            <span className="text-lg  text-[#45A69B]"> Sign up with Facebook</span>
        </div>
)}
export default SigninWithFacebook;