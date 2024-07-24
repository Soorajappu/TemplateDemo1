import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
        <div className='w-full h-screen overflow-hidden absolute bg-transparent'>
          <div className='h-[641px] flex items-center justify-center bg-transparent'>
            <div className='mt-6 w-[340px] p-4 rounded-lg bg-[#325ef1] -rotate-10'>
              <div className=' w-[340px] p-4 bg-[#f1f1f1] rounded-lg m-[-16px] -rotate-350'>
              <h1 className='text-5xl items-center justify-center flex bg-transparent'>Login</h1>
              <form className='bg-transparent'>
                <div className='mt-6 bg-transparent'>
                  <label className='text-xl block bg-transparent'>Username</label>
                  <input type="text" placeholder='enter your username' className='w-[17.2rem] pl-2 h-10 border-2 border-[#000000] bg-transparent rounded-lg'/>
                </div>
                <div className='mt-6 bg-transparent'>
                  <label className='text-xl block bg-transparent'>Password</label>
                  <input type="password" placeholder='enter your password' className='w-[17.2rem] pl-2 h-10 border-2 border-[#000000] bg-transparent rounded-lg'/>
                </div>
                <div className="flex items-center justify-between mt-3 bg-transparent">
                      <div className="flex items-start bg-transparent">
                          <div className="flex items-center h-5 bg-transparent">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border bg-transparent border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm bg-transparent">
                            <label for="remember" className="text-gray-500 dark:text-gray-300 bg-transparent">Remember me</label>
                          </div>
                      </div>
                      <Link to={'/ForgotPassword'} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 bg-transparent">Forgot password?</Link>
                  </div>
                <button type='button' className='bg-[#4682f1] hover:bg-[#3769f1] mt-6 text-white h-10 w-full rounded-lg'>Login</button>
                <p className="text-sm text-black dark:text-gray-400 mt-2">
                    Don’t have an account yet? <Link to={"/Signup"} className="font-medium text-primary-600 hover:underline text-blue-500 hover:text-blue-800">Sign up</Link>
                </p>
              </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login