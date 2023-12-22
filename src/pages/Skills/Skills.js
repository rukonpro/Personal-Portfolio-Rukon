import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css'
import SkillsImg from './img/web-development.svg';

import { ProgressBar } from "react-progressbar-fancy";



const Skills = () => {

    AOS.init();

    return (
        <section id="skills" className=' container  items-center '>
            <div className=" my-5 ">
                <div>
                    <h2 className=" pb-4 " data-aos="zoom-out-down">SKILLS</h2>
                </div>
                <div data-aos="zoom-out-down" data-aos-duration="2000"></div>
                <div className="row ">
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <div className="" data-aos="zoom-out-right" data-aos-duration="2000">
                            <ProgressBar score={70} progressColor="purple" label='SEO' darkTheme="true" className='py-2' />
                        </div>

                        <div className="" data-aos="zoom-out-left" data-aos-duration="2000">
                            <ProgressBar score={80} progressColor="red" label='Social meida Markeding & promotion ' darkTheme="true" className='py-2' />
                        </div>

                        <div className="" data-aos="zoom-out-right" data-aos-duration="2000">
                            <ProgressBar score={80} progressColor="green" label='Email Marketing' darkTheme="true" className='py-2' />
                        </div>
                        <div className="" data-aos="zoom-out-right" data-aos-duration="2000">
                            <ProgressBar score={85} progressColor="blue" label='Youtube SEO' darkTheme="true" className='py-2' />
                        </div>
                        <div className="" data-aos="zoom-out-right" data-aos-duration="2000">
                            <ProgressBar score={90} progressColor="purple" label='Ads campign' darkTheme="true" className='py-2' />
                        </div>

                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 '>
                        <div style={{ display: 'flex', flexDirection: "column-reverse", justifyContent: 'center' }}>
                            <img
                                data-aos-duration="3000"
                                data-aos="zoom-out-left"
                                src={SkillsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>













        </section>
    );
};

export default Skills;