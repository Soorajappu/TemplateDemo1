import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footer from './Footer';
import { Link } from 'react-router-dom'


const Contact = () => {
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
        </div>
        <Footer />
    </>
  )
}

export default Contact