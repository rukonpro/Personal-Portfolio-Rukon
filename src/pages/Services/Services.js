import React from 'react';
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicePhoto from "../Services/img/responsive-website-design-vector-2.png"



const Services = () => {
    AOS.init();
    return (
        <div id="services"
            className='container'
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className=' mb-10'>
                <h1 className=' pt-32 ' data-aos="zoom-out-down">what can i do</h1>
            </div>
            <div className='row'>

                <div className='col-sm-12 col-md-12 col-lg-6 '>
                    <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center' }}>
                        <img data-aos="flip-right"
                            data-aos-duration="3000"
                            src={ServicePhoto} alt="" />
                    </div>
                </div>

                <div className='col-sm-12 col-md-12 col-lg-6 ' style={{ margin: '0px', padding: '20px 10px' }}>


                    <div className='my-2 container' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        data-aos-anchor-placement="top-bottom" >
                        <div className=' row border p-3'>
                            <div className='col-lg-4 col-md-5 col-sm-12'>
                                <img className='services-img img-fluid' src="https://cdn-icons-png.flaticon.com/512/1055/1055666.png" alt="" />
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-12'>
                                <div>
                                    <h1 className='font-bold text-5xl text-purple-300'>Front-end</h1>
                                </div>
                                <div>
                                    As well as making responsive front-end development with popular javascript frameworks such as React.js, familiar with Vue.js, HTML5, CSS3, Bootstrap4&5,and  MaterialUI.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='my-2 container' data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="row border p-3" >
                            <div className='col-lg-4 col-md-5 col-sm-12'>
                                <img className='services-img img-fluid' src="https://cdn-icons-png.flaticon.com/512/4108/4108900.png" alt="" />
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-12'>
                                <div >
                                    <h1 className='font-bold text-5xl text-green-300 '>Back-end</h1>
                                </div>
                                <div>
                                    <p>Utilising node.js, express.js, mongoDB, firebase, heroku, including REST APIs, and more. Building e-services, e-commerce, e-learning and more website and web applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-2 container' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="row border p-3">
                            <div className='col-lg-4 col-md-5 col-sm-12'>
                                <img className='services-img img-fluid' src="https://cdn-icons-png.flaticon.com/512/1085/1085802.png" alt="" />
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-12'>
                                <div>
                                    <h1 className='font-bold text-5xl text-yellow-300'>Template</h1>
                                </div>
                                <div>
                                    <p>As well as making responsive web template with HTML5, CSS3, Bootstrap4&5, Tailwind-CSS and Metaril iu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;