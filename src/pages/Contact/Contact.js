import React from 'react';
import './Contact.css';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const messageSubmit = (event) => {
        event.preventDefault();
    }
    AOS.init();
    return (
        <div id="contact"  >


            <div className='container'>
                <form onSubmit={messageSubmit} >
                    <h1 className="text-purple-400 fw-bold text-2xl mb-6 pt-28 font-light uppercase" data-aos="zoom-out-down">
                        CONTACT ME
                    </h1>
                    <div data-aos="fade-right"></div>
                    <div className=" mt-10 row ">
                        <div className="  mb-6 font-light col-sm-12 col-md-6 col-lg-6" data-aos="fade-right">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className=" mb-6 font-light col-sm-12 col-md-6 col-lg-6" data-aos="fade-left">
                            <Input
                                type="email"
                                color="purple"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap ">
                        <div className="w-full lg:w-12/12  font-light" data-aos="fade-right">
                            <Input
                                type="text"
                                color="purple"
                                placeholder="Subject"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-6 font-light" data-aos="fade-right">
                        <Textarea color="purple" placeholder="Message" />
                    </div>

                    <button className='btn btn-danger my-10 border-0  ' data-aos="fade-left">Send Message</button>
                </form>

            </div>

        </div>



    );
};

export default Contact;