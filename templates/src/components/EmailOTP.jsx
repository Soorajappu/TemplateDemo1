import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
import Footer from './Footer';



const EmailOTP = () => {

    const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the OTP to the user's email
    console.log('OTP sent to:', email);
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically verify the OTP
    console.log('OTP verified:', otp);
    setStep(3);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here, you would typically handle the password reset
    console.log('Password reset successful');
  };


  return (
    <>
      <div>
          <header
              className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
              <div className="px-4 rounded-xl">
                  <div className="flex items-center justify-between">
                      <div className="flex shrink-0">
                          <Link aria-current="page" className="flex items-center" to={"/"}>
                              {/* <img class="h-7 w-auto" src="#" alt=""/> */}
                              <p className="">SKG Creations</p>
                          </Link>
                      </div>
                      <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                          <Link aria-current="page"
                              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                              to={"/"}>Home</Link>
                          <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                              to={"/About"}>About</Link>
                          <Link className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                              to={"/Contact"}>Contact</Link>
                      </div>
                      <div className="flex items-center justify-end gap-3">
                          <Link className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                              to={"/Signup"}>Sign up</Link>
                          <Link className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                              to={"/Login"}>Login</Link>
                      </div>
                  </div>
              </div>
          </header>
          <div>
              <div className='bg-[#080620] h-screen w-full overflow-hidden absolute p-2'>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce1 ml-[1000px] mt-6'></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-56"></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-[890px]"></div>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce2 ml-40 mt-20'></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-[550px]"></div>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce3 ml-[800px] mt-7'></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-20"></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-[1290px]"></div>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce4 ml-72 mt-10'></div>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce4 ml-[1300px] mt-10 -mb-32'></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-[520px]"></div>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce5 ml-[900px] mt-16'></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-64"></div>
                  <div className="w-2 h-2 bg-white shadow shadow-white border-transparent rounded-full animate-zoomBounce ml-[1100px]"></div>
                  <div className='border-2 w-14 h-14 bg-transparent shadow shadow-white border-transparent rounded-full animate-bounce6 ml-[450px] mt-12'></div>
              </div>
            </div>
      
          <div className='w-full h-screen flex overflow-hidden absolute items-center justify-center'>
              <div className='w-[340px] p-2 rounded-lg bg-[#325ef1]'>
                  <div className='p-4 bg-[#f1f1f1] rounded-lg'>
                  {step === 1 && (
                      <form onSubmit={handleEmailSubmit}>
                      <h1 className='text-3xl text-center mb-4'>Forgot Password</h1>
                      <div className='mt-6'>
                          <label htmlFor='email' className='text-lg block'>Email</label>
                          <input 
                          id='email' 
                          type='email' 
                          placeholder='Enter your email' 
                          className='w-full pl-2 h-10 border-2 border-[#000000] rounded-lg' 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          />
                      </div>
                      <p className="text-sm text-black dark:text-gray-400 mt-2">
                        Sent OTP using Phono Number? <Link to={"/ForgotPassword"} className="font-medium text-primary-600 hover:underline text-blue-500 hover:text-blue-800">OTP Using Phono Number</Link>
                      </p>
                      <button type='submit' className='bg-[#4682f1] hover:bg-[#3769f1] mt-6 text-white h-10 w-full rounded-lg'>Send OTP</button>
                      <p className="text-sm  text-black dark:text-gray-400 mt-2">
                        <Link to={"/Login"} className="font-medium items-center justify-center flex text-primary-600 hover:underline text-blue-500 gap-1 hover:text-blue-800"><FaChevronLeft className='mt-[2px]' /> Go Back To Login</Link>
                      </p>
                      </form>
                  )}
                  {step === 2 && (
                      <form onSubmit={handleOtpSubmit}>
                      <h1 className='text-5xl text-center mb-4'>Enter OTP</h1>
                      <div className='mt-6'>
                          <label htmlFor='otp' className='text-xl block'>OTP</label>
                          <input 
                          id='otp' 
                          type='text' 
                          placeholder='Enter OTP' 
                          className='w-full pl-2 h-10 border-2 border-[#000000] rounded-lg' 
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                          />
                      </div>
                      <button type='submit' className='bg-[#4682f1] hover:bg-[#3769f1] mt-6 text-white h-10 w-full rounded-lg'>Verify OTP</button>
                      </form>
                  )}
                  {step === 3 && (
                      <form onSubmit={handlePasswordReset}>
                      <h1 className='text-5xl text-center mb-4'>Reset Password</h1>
                      <div className='mt-6'>
                          <label htmlFor='password' className='text-xl block'>New Password</label>
                          <input 
                          id='password' 
                          type='password' 
                          placeholder='Enter new password' 
                          className='w-full pl-2 h-10 border-2 border-[#000000] rounded-lg' 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          />
                      </div>
                      <div className='mt-6'>
                          <label htmlFor='confirmPassword' className='text-xl block'>Confirm Password</label>
                          <input 
                          id='confirmPassword' 
                          type='password' 
                          placeholder='Confirm new password' 
                          className='w-full pl-2 h-10 border-2 border-[#000000] rounded-lg' 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          />
                      </div>
                      <button type='submit' className='bg-[#4682f1] hover:bg-[#3769f1] mt-6 text-white h-10 w-full rounded-lg'>Reset Password</button>
                      </form>
                  )}
                  </div>
              </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default EmailOTP