import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <>
      <div className='w-full overflow-hidden absolute bg-transparent'>
          <div className='h-[641px] flex items-center justify-center bg-transparent'>
            <div className='mt-2 w-[340px] p-4 rounded-lg bg-[#325ef1] -rotate-10'>
              <div className=' w-[340px] p-4 bg-[#f1f1f1] rounded-lg m-[-16px] -rotate-350'>
              <h1 className='text-4xl items-center justify-center flex bg-transparent'>Signup</h1>
              <form className='bg-transparent'>
                <div className='mt-1 bg-transparent'>
                  <label className='text-lg block bg-transparent'>Username</label>
                  <input type="text" placeholder='enter your username' className='w-[17.2rem] pl-2 h-8 border-2 border-[#000000] bg-transparent rounded-lg'/>
                </div>
                <div className='mt-1 bg-transparent'>
                  <label className='text-lg block bg-transparent'>Email</label>
                  <input type="email" placeholder='enter your email' className='w-[17.2rem] pl-2 h-8 border-2 border-[#000000] bg-transparent rounded-lg'/>
                </div>
                <div className='mt-1 bg-transparent'>
                  <label className='text-lg block bg-transparent'>Password</label>
                  <input type="password" placeholder='enter your password' className='w-[17.2rem] pl-2 h-8 border-2 border-[#000000] bg-transparent rounded-lg'/>
                </div>
                <div className='mt-1 bg-transparent'>
                  <label className='text-lg block bg-transparent'>Confirm Password</label>
                  <input type="password2" placeholder='enter your confirm password' className='w-[17.2rem] pl-2 h-8 border-2 border-[#000000] bg-transparent rounded-lg'/>
                </div>
                <div class="flex items-center justify-between mt-3 bg-transparent">
                      
                  </div>
                <button type='button' className='bg-[#4682f1] hover:bg-[#3769f1] mt-2 text-white h-10 w-full rounded-lg'>Signup</button>
                <p class="text-sm text-black dark:text-gray-400 mt-2">
                    Already have an account?<Link to={'/Login'} className="font-medium text-primary-600 hover:underline text-blue-500 hover:text-blue-800"> Login</Link>
                </p>
              </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup