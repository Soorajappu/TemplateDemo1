import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
        <div className='w-full mt-24 overflow-hidden absolute bg-transparent'>
            <div className='bg-transparent'>
                <section className="bg-transparent items-center justify-center flex">
                    <form className='bg-transparent'>
                        <h1 className='bg-transparent text-white mb-4'>Contact Us</h1>
                        <div className='bg-transparent mb-4 gap-7 flex'>
                            <label className='bg-transparent text-white'>Name:</label>
                            <input className='bg-transparent text-white rounded-lg border-2' type="text" name="name" />
                        </div>
                        <div className='bg-transparent mb-4 gap-8 flex'>
                            <label className='bg-transparent text-white'>Email:</label>
                            <input className='bg-transparent text-white rounded-lg border-2' type="email" name="email" />
                        </div>
                        <div className='bg-transparent mb-4 gap-4 flex'>
                            <label className='bg-transparent text-white'>Subject:</label>
                            <input className='bg-transparent text-white rounded-lg border-2' type="text" name="subject" />
                        </div>
                        <div className='bg-transparent mb-4 gap-2 flex'>
                            <label className='bg-transparent text-white items-start flex'>Message:</label>
                            <textarea className='bg-transparent text-white rounded-lg border-2 w-96 h-32' name="message"></textarea>
                        </div>
                        <button type='button' className='bg-transparent text-white border ring-2 rounded-full w-full px-3 hover:bg-blue-700'>Submit</button>
                    </form>
                </section>
                <h2 className='bg-transparent text-white flex items-center justify-center underline mt-4'>Contact Information</h2>
                <section className="bg-transparent flex items-center justify-center gap-3 mt-4">
                    <p className='bg-transparent text-white'>Email: proskg754@gmail.com,</p>
                    <p className='bg-transparent text-white'>Phone: +91 9496325766</p>
                    <p className='bg-transparent text-white'>Place: Kerala,India</p>
                </section>
                <section className="bg-transparent flex items-center justify-center gap-8">
                    <h2 className='bg-transparent text-white'>Follow Us:</h2>
                    <a href="#!" className='bg-transparent text-white flex gap-2 hover:text-blue-600'><FaFacebook className='bg-transparent mt-[4px]'/> Facebook</a>
                        <a href="#!" className='bg-transparent text-white flex gap-2 hover:text-[#4aaeff]'><AiFillTwitterCircle className='bg-transparent mt-[4px]'/> Twitter</a>
                        <a href="#!" className='bg-transparent text-white flex gap-2 hover:text-blue-700'><FaLinkedin className='bg-transparent mt-[4px]'/> LinkedIn</a>
                </section>
            </div>
        </div>
    </>
  )
}

export default Contact