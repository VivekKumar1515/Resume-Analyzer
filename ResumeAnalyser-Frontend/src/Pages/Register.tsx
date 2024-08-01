

function Register() {
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
                <p className='font-medium text-sm my-auto hidden sm:block'>Already have an account?</p>
                <button className='border border-[#ee6969] py-[0.3rem] px-7 rounded-xl text-[#ee6969] font-medium my-auto hover:bg-[#f0e6e6] transition-colors duration-200'>Login In</button>
            </a>
          </div>
        </div>


          <div className='w-[400px] mx-auto flex flex-col items-center space-y-6 mt-[7rem]'>


            <h1 className='text-[32px] w-[297px] text-center mb-[12px] font-medium text-gray-700 font-serif outline-none'>Let's get started with your account.</h1>


            <div className="flex space-x-3 text-[0.78rem] text-gray-600 w-[70%] px-1 items-center">
                <input type="checkbox" required name="" id="terms-of-use" className="h-8 w-8"/>
                <label htmlFor="terms-of-use">I have read and agree to ResumeAnalyzer's Term's of use, Privacy Policy and Cookie Policy</label>
            </div>


            <button className='flex w-[70%] py-2  bg-[#0077b7] rounded-lg text-sm space-x-5'>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" className='h-9 w-9 ml-[50px]'/>
                <span className='my-auto text-white'>Log in with LinkedIn</span>
            </button>


            <span className='text-gray-700'>or</span>
            

            <button className='flex  w-[70%] py-[0.44rem]  bg-white rounded-lg text-sm border space-x-7 outline-none'>
                <img src="https://img.icons8.com/?size=100&id=eBEo6FOQZ3v4&format=png&color=000000" alt="" className='h-6 w-6 ml-[56px]'/>
                <span className='my-auto text-black'>Sign up with email</span>
            </button>


            <button className='flex  w-[70%] py-[0.44rem]  bg-white rounded-lg text-sm border space-x-5 outline-none'>
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className='h-9 w-9 ml-[50px]'/>
                <span className='my-auto text-black'>Sign up with Google</span>
            </button>


            <button className='flex w-[70%] py-3  bg-[#1877f2] rounded-lg text-sm space-x-7 outline-none'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png" alt="" className='h-7 w-7 my-auto ml-[50px]'/>
                <span className='my-auto text-white'>Sign up with Facebook</span>
            </button>
            
          </div>
      </div>
    </div>
  )
}

export default Register