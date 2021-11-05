import React from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
    AOS.init();
    return (
        <div className='header-container'>
            <div className=' name-container'>
                <div className="header-img">
                    <img src="https://i.ibb.co/gb1WtxG/Rukon-Pofile-Pic-2.png" alt="" data-aos="zoom-out-left" />
                </div>

                <h1 className="font-bold" data-aos="zoom-out-right">꧁MD.RUKON UDDIN꧂</h1>


                <div className="develop-title">
                    <Typewriter
                        options={{
                            strings: ['React Developer', 'Responsive Web Designer', 'MERN Stack Developer|'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="flex justify-center items-center">

                    <button className="inline-flex items-center  text-white px-4 py-1 text-sm font-medium border border-transparent rounded-md shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 group bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                        <svg className="w-6 h-6 text-white  group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                        <span className="ml-2">Download CV</span>
                    </button>
                </div>



            </div>
        </div>
    );
};

export default Header;