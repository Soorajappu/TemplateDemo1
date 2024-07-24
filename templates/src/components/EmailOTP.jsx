import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";



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
    </>
  )
}

export default EmailOTP