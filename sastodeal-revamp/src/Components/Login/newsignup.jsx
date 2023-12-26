import React from 'react';
import { Link } from "react-router-dom"

function NewSignup() {
    return (
        <div className="flex ml-60 mt-10 mb-40 " >
            <p className="text-lg mr-3"> New member?</p>
            <Link to="/signup" onClick={() => { window.scrollTo(0, 0); }}>
                <button className="bg-[#613E98] text-white  font-bold py-2 px-4 rounded-lg justify-center">Signup</button>
            </Link>
        </div>
    )
}
export default NewSignup;