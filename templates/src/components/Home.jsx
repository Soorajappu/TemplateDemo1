import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
