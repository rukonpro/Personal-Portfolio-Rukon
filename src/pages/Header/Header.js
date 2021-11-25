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

                <h1 className="font-bold" style={{ fontSize: '160%' }} data-aos="zoom-out-right">꧁MD.RUKON UDDIN꧂</h1>


                <div className="develop-title">
                    <Typewriter
                        options={{
                            strings: ['React Developer', 'Responsive Web Designer', 'MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                            cursor: '✍'

                        }}
                    />
                </div>
                <div className="flex justify-center items-center">

                    <a href='https://drive.google.com/file/d/14DIfWRkiwFSvBbuMq0KOtpQ_yWGtJyt9/view' alt='' target='blank'>

                        <button className="inline-flex items-center  text-white px-4 py-1 text-sm font-medium border border-transparent rounded-md shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 group bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">

                            <span className="ml-2" >RESUME</span>
                        </button>
                    </a>
                </div>



            </div>
        </div>
    );
};

export default Header;