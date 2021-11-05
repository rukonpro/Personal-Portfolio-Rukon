import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
    AOS.init();
    return (
        <div id="aboutMe" className='about-us-bg h-screen  flex justify-center items-center' >
            <div className='max-w-3xl px-2' >
                <div className=" flex justify-center mb-5" data-aos="fade-right">
                    <h1 className="font-bold  text-5xl text-pink-400" >ABOUT ME</h1>
                </div>
                <div data-aos="fade-right"></div>
                <div data-aos="fade-left">
                    <p>Hello! I am <span className=' font-bold'>Rukon</span>, a React Developer, MERN stack developer, Jr. Web Developer or a JavaScript enthusiast. And I have good knowledge building web applications with React.js for client-side, Node.js / express.js for server-side, and MongoDB for database. I am currently available for a job. If your company needs a React developer, junior web developer, or MERN stack developer,then get in touch.</p>
                </div>
                <div className="mt-5 " data-aos="fade-right">
                    <button className="inline-flex items-center  text-white px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 group bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                        <svg className="w-6 h-6 text-white  group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                        </svg>
                        <span className="ml-2">Download CV</span>
                    </button>

                </div>
            </div>
            <div data-aos="fade-right"></div>
        </div>
    );
};

export default AboutMe;