import React from 'react';
import google from '../image/google.png';

function SigninWithGoogle() {
  return (
    <div className="flex items-center justify-content bg-white text-black rounded-md p-2 border border-[#45A69B] h-16 w-80">
      <img src={google} alt="Googles logo" className='h-6 w-6 mr-5 ml-6'/>
      <span className='text-lg  text-[#45A69B]'>Sign up with Google</span>
    </div>
  )
}

export default SigninWithGoogle;
