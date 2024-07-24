import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
        <div className='w-full mt-[560px] overflow-hidden flex items-center justify-center absolute bg-[#080620]'>
            <footer className='bg-transparent mt-5 grid items-center justify-center pb-[13px]'>
                    <p className='bg-transparent text-white'>&copy; 2024 SKG Creations. All rights reserved.</p>
                    <div className='bg-transparent flex items-center justify-center gap-6'>
                        <a href="#!" className='bg-transparent text-white flex gap-2 hover:text-blue-600'><FaFacebook className='bg-transparent mt-[4px]'/> Facebook</a>
                        <a href="#!" className='bg-transparent text-white flex gap-2 hover:text-[#4aaeff]'><AiFillTwitterCircle className='bg-transparent mt-[4px]'/> Twitter</a>
                        <a href="#!" className='bg-transparent text-white flex gap-2 hover:text-blue-700'><FaLinkedin className='bg-transparent mt-[4px]'/> LinkedIn</a>
                    </div>
            </footer>
        </div>
    </>
  )
}

export default Footer