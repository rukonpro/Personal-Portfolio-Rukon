import React from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileLogo from './img/profile-2.png'
const Header = () => {
    AOS.init();
    return (
        <div className='header-container md:h-screen   pt-28  md:pt-0  flex md:items-center bg-cover overflow-hidden'>
            <div className=' grid grid-cols-2 gap-5 container items-center '>

                <div className='md:col-span-1 col-span-2'>
                    <div className=" ">
                        <h1 className=" text-6xl"  data-aos="zoom-out-right ">Hi!</h1>
                        <h1 className="text-4xl"  data-aos="zoom-out-right ">Im Rukon  ,</h1>


                        <h1 className=' text-2xl md:text-5xl  '>
                            <Typewriter

                                options={{
                                    strings: ['React Developer', 'Responsive Web Designer', 'MERN Stack Developer'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: '✍'

                                }}
                            />
                        </h1>

                    </div>

                    <div >

                        <a href='https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view' alt='' target='blank'>

                            <button className="inline-flex items-center  text-white mt-4 px-4 py-2 text-sm font-medium  rounded-md shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 group bg-gray-800 hover:bg-gray-900 focus:ring-gray-800">
                                <svg className="w-6 h-6 text-white animate-bounce  group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                                </svg>
                                <span className="ml-2" >RESUME</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="md:col-span-1 col-span-2 flex justify-end ">
                    <img className='w-auto md:h-full h-96 object-contain ' src={ProfileLogo} alt="" data-aos="zoom-out-left" />
                </div>
            </div>
        </div>
    );
};

export default Header;