import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css'

const Skills = () => {

    AOS.init();

    return (
        <div id="skills" className=' container-fluid h-screen d-flex justify-center items-center skills-container'>
            <section className=" my-5 " id="Skills">
                <div className="" data-aos="zoom-out-down" data-aos-duration="2000">
                    <h2 className=" text-5xl fw-bold text-center pb-4 text-pink-400" >SKILLS</h2>
                </div>
                <div data-aos="zoom-out-down" data-aos-duration="2000"></div>
                <div className="skills row">
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-right" data-aos-duration="2000">
                        <h4>HTML5</h4>
                        <div className="progress " >

                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                style={{ width: "98%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">98%</div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-left" data-aos-duration="2000">
                        <h4>CSS & CSS3</h4>
                        <div className="progress  " >
                            <div className="progress-bar progress-bar-striped bg-success progress-bar-animated"
                                role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100">90%</div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-right" data-aos-duration="2000">
                        <h4>BOOTSTRAP4 & BOOTSTRAP5</h4>
                        <div className="progress  ">
                            <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar"
                                style={{ width: '95%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="95">95%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-right" data-aos-duration="2000">
                        <h4>Telwind CSS</h4>
                        <div className="progress  ">
                            <div className="progress-bar progress-bar-striped  bg-purple-500 progress-bar-animated" role="progressbar"
                                style={{ width: '95%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="95">95%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-right" data-aos-duration="2000">
                        <h4>Material-UI</h4>
                        <div className="progress  ">
                            <div className="progress-bar progress-bar-striped bg progress-bar-animated" role="progressbar"
                                style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-left" data-aos-duration="2000">
                        <h4>JAVASCRIPT</h4>
                        <div className="progress ">
                            <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                                role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0"
                                aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-right" data-aos-duration="2000">
                        <h4>REACT</h4>
                        <div className="progress ">
                            <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                                role="progressbar" style={{ width: "90%" }} aria-valuenow="100" aria-valuemin="0"
                                aria-valuemax="100">90%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-left" data-aos-duration="2000">
                        <h4>MongoDB</h4>
                        <div className="progress ">
                            <div className="progress-bar progress-bar-striped bg-dark progress-bar-animated" role="progressbar"
                                style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-right" data-aos-duration="2000">
                        <h4>Node.JS</h4>
                        <div className="progress ">
                            <div className="progress-bar progress-bar-striped bg-blue-400 progress-bar-animated" role="progressbar"
                                style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4  " data-aos="zoom-out-left" data-aos-duration="2000">
                        <h4>Express.js</h4>
                        <div className="progress ">
                            <div className="progress-bar progress-bar-striped bg-deep-purple-200 progress-bar-animated" role="progressbar"
                                style={{ width: "70%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;