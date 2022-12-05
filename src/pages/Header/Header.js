import React from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileLogo from './img/photostudio-1-designify.png'
const Header = () => {
    AOS.init();
    return (
        <div className='header-container'>
            <div className=' name-container'>
                <div className="header-img ">
                    <img className='h-auto w-auto ' src={ProfileLogo} alt="" data-aos="zoom-out-left" />
                </div>

                <h1 className="titleDesign" style={{ fontSize: '160%' }} data-aos="zoom-out-right ">꧁MD.RUKON UDDIN꧂</h1>


                <div className="develop-title">
                    <h6 >   <Typewriter
                        options={{
                            strings: ['React Developer', 'Responsive Web Designer', 'MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                            cursor: '✍'

                        }}
                    /></h6>
                </div>
                <div className="flex justify-center items-center">

                    <a href='https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view' alt='' target='blank'>

                        <button className="inline-flex items-center  text-white mt-4 px-4 py-2 text-sm font-medium  rounded-md shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 group bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                            <svg className="w-6 h-6 text-white animate-bounce  group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                            </svg>
                            <span className="ml-2" >RESUME</span>
                        </button>
                    </a>
                </div>



            </div>
        </div>
    );
};

export default Header;