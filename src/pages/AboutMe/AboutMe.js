import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutImg from './img/dev-html.png';
const AboutMe = () => {
    AOS.init();
    return (
        <div id="aboutMe" className=' container-fluid d-flex justify-center items-center skills-container pt-32' >
            <div className=' container px-2' >
                <div className=" flex justify-center mb-5" >
                    <h1 className="titleDesign" data-aos="zoom-out-down">ABOUT ME</h1>
                </div>
                <div className=' row'>
                    <div className=' col-sm-12 col-md-12 col-lg-6'>
                        <img data-aos="fade-right" data-aos-duration="2000" src={AboutImg} alt="" />
                    </div>
                    <div className=' col-sm-12 col-md-12 col-lg-6 ' data-aos="fade-left" data-aos-duration="2000">
                        <p style={{ textAlign: "justify", fontWeight: 'bold' }}>Hello! <br /> I am a Junior Web Developer,React Developer, MERN stack developer, or a JavaScript enthusiast. <br /><br />

                            I have good knowledge of building web applications with React.js for the client-side, Node.js / express.js for the server-side, and MongoDB for the database.
                            I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction.I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.</p>

                        <p style={{ textAlign: "justify", fontWeight: 'bold' }}>
                            I am currently available for a job. If your company needs a React developer, junior web developer, or MERN stack developer, then get in touch.
                        </p>

                        <div className="mt-5 " data-aos="fade-right" data-aos-duration="2000">
                            <a href="./Rukon Uddin Resume.pdf" download>
                                <button className="inline-flex items-center  text-white px-4 py-2 text-sm font-medium  rounded-md shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150 group bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                                    <svg className="w-6 h-6 text-white animate-bounce  group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                                    </svg>
                                    <span className="ml-2 uppercase">Download Resume</span>
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AboutMe;