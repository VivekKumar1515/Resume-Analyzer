import React from 'react'
import linkedIn from '../assets/linkedin.png'

function Login() {
  return (
    <div className="w-[vw] h-[vh] bg-[#fafafa]">
      <div className="h-screen lg:w-[80%] w-[95%] mx-auto font-sans">
        <div
          id="navigation"
          className="w-full flex flex-row justify-between h-20"
        >
          <div className="flex flex-row items-center">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/?size=100&id=NKRM4VSa2hw2&format=png&color=ee6969"
              alt="resume"
            />

            <div className="font-sans text-xl font-extrabold mt-2">
              ResumeAnalyser
            </div>
          </div>

          <div className="my-auto">
            <a href="#" className='flex space-x-7 align-middle'>
                <p className='font-medium text-sm my-auto hidden sm:block'>Don't have an account?</p>
                <button className='border border-[#ee6969] py-[0.3rem] px-7 rounded-xl text-[#ee6969] font-medium my-auto hover:bg-[#f0e6e6] transition-colors duration-200'>Sign Up</button>
            </a>
          </div>
        </div>


          <div className='w-[400px] mx-auto flex flex-col items-center space-y-6 mt-[7rem]'>
            <h1 className='text-[32px] w-[272px] text-center mb-[12px] font-medium text-gray-700 font-serif outline-none'>Login in to your account.</h1>
            <button className='flex w-[70%] py-2  bg-[#0077b7] rounded-lg text-sm space-x-5'>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" className='h-9 w-9 ml-[50px]'/>
                <span className='my-auto text-white'>Log in with LinkedIn</span>
            </button>
            <button className='flex  w-[70%] py-[0.44rem]  bg-white rounded-lg text-sm border space-x-5 outline-none'>
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className='h-9 w-9 ml-[50px]'/>
                <span className='my-auto text-black'>Log in with Google</span>
            </button>
            <button className='flex w-[70%] py-3  bg-[#1877f2] rounded-lg text-sm space-x-7 outline-none'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png" alt="" className='h-7 w-7 my-auto ml-[50px]'/>
                <span className='my-auto text-white'>Log in with Facebook</span>
            </button>
            <span className='text-gray-700'>or</span>
            <input type="text" required className='border w-[70%] h-[52px] rounded-md pl-3 outline-none focus:border-[#ee6969] transition-colors duration-200 placeholder:text-gray-400 placeholder:font-normal placeholder:text-[0.95rem]' placeholder='Email'/>
            <input type="password" required className='border w-[70%] h-[52px] rounded-md pl-3 outline-none focus:border-[#ee6969] transition-colors duration-200 placeholder:text-gray-400 placeholder:font-normal placeholder:text-[0.95rem]' placeholder='Password'/>
            <button className='flex w-[70%] py-3  bg-[#f74c4a] rounded-lg text-sm space-x-7'>
                <span className='my-auto text-white font-medium text-center mx-auto outline-none'>Log In</span>
            </button>
            <button className='font-medium text-sm text-gray-700'>Forgot Password?</button>
          </div>
      </div>
    </div>
  )
}

export default Login