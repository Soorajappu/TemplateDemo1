import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';



const Home = () => {
  return (
    <>
        <div>
            <header
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                {/* <img class="h-7 w-auto" src="#" alt=""/> */}
                                <p className="">SKG Creations</p>
                            </a>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <a aria-current="page"
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="/TemplateDemo1/">Home</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="/TemplateDemo1/About">About</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="/TemplateDemo1/Contact">Contact</a>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                href="/TemplateDemo1/Signup">Sign up</a>
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                href="/TemplateDemo1/Login">Login</a>
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
            <div className='w-full mt-64 overflow-hidden absolute bg-transparent'>
                <div className='bg-transparent'>
                    <section className=' bg-transparent'>
                        <h1 className='bg-transparent text-white text-4xl items-center justify-center flex'>Welcome to SKG Creations</h1>
                        <p className='bg-transparent text-white flex items-center justify-center mt-5'>Discover the best template for your signup and signin needs!</p>
                        <div className='bg-transparent mt-10 gap-14 flex justify-center'>
                            <Link to="/Signup" className='bg-transparent text-white border border-gray-100 rounded-full px-4 hover:bg-blue-600'>Signup</Link>
                            <Link to="/Login" className='bg-transparent text-white border border-gray-100 rounded-full px-4 hover:bg-blue-600'>Signin</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Home;
