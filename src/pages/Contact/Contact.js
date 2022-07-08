import React, { useRef, forwardRef, useState } from 'react';
import './Contact.css';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import ContactImg from "./img/Contact-img.webp";
import ContactUs from "./img/contact-us.png";
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_zdrtp9b', 'template_n1ub0zc', form.current, 'user_sMNanZ38ggdHIXPN6PNqZ')
            .then((result) => {
                console.log(result.text);
                setOpen(true);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    AOS.init();


    return (
        <div id="contact"  >

            <div className='container'>

                {/*  <form ref={form} onSubmit={sendEmail} >
                    <div data-aos="fade-right" data-aos-duration="2000"></div>
                    <div className=" mt-10 row ">
                        <div className="  mb-6 font-light col-sm-12 col-md-6 col-lg-6 " data-aos="fade-right" data-aos-duration="2000">
                            <Input
                                required
                                ref={form}
                                type="text"
                                style={{ color: 'white' }}
                                placeholder="Full Name"
                                name="user_name"
                                color="purple"


                            />
                        </div>
                        <div className=" mb-6 font-light col-sm-12 col-md-6 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                            <Input
                                required
                                style={{ color: 'white' }}
                                type="email"
                                color="purple"
                                placeholder="Email Address"
                                name="user_email"

                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap ">
                        <div className="w-full lg:w-12/12  font-light" data-aos="fade-right" data-aos-duration="2000">
                            <Input
                                required
                                style={{ color: 'white', padding: 2 }}
                                type="text"
                                color="purple"
                                placeholder="Subject"
                                name='subject'

                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-6 font-light" data-aos="fade-right" data-aos-duration="2000">
                        <Textarea
                            required
                            style={{ color: 'white' }}
                            color="purple"
                            placeholder="Message"
                            name="message"

                        />
                    </div>

                    <button type="submit" className='btn btn-danger my-10 border-0  ' data-aos="fade-left" data-aos-duration="2000">Send Message</button>
                </form> */}
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </Stack>





                <div

                    className="max-w-screen-xl   grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900 rounded-lg shadow-lg">

                    <div className="flex flex-col justify-between">
                        <div data-aos="fade-bottom" data-aos-duration="2000">

                            <div className="mt-8 text-center" data-aos="fade-right" data-aos-duration="2000">
                                {/* <img className=' w-full' src={ContactUs} alt={ContactUs} /> */}
                                <h1 className="text-purple-400 fw-bold text-2xl  pt-28 font-light uppercase" data-aos="zoom-out-down" data-aos-duration="2000">
                                    CONTACT ME
                                </h1>
                            </div>
                        </div>
                        <div className="mt-8 text-center" data-aos="fade-left" data-aos-duration="2000">
                            <img className=' w-full animate-bounce' src={ContactImg} alt={ContactImg} />
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="">
                            <div className='mt-8' data-aos="fade-right" data-aos-duration="2000">
                                <span className="uppercase text-sm text-green-100 font-bold  ">Full Name</span>
                                <input className="w-full  bg-indigo-900 focus:bg-indigo-700 text-gray-100 mt-2 p-3 rounded-lg focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3"
                                    type="text" placeholder="Name" name="user_name" required />
                            </div>
                            <div className="mt-8" data-aos="fade-left" data-aos-duration="2000">
                                <span className="uppercase text-sm text-green-100 font-bold">Email</span>
                                <input className="w-full bg-indigo-900 focus:bg-indigo-700 text-green-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3"
                                    type="text" placeholder='Email' name="user_email" required />
                            </div>
                            <div className="mt-8" data-aos="fade-right" data-aos-duration="2000">
                                <span className="uppercase text-sm text-green-100 font-bold">SubJect</span>
                                <input className="w-full bg-indigo-900 focus:bg-indigo-700 text-green-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3"
                                    type="text" placeholder='SubJect' name="message" required />
                            </div>
                            <div className="mt-8" data-aos="fade-left" data-aos-duration="2000">
                                <span className="uppercase text-sm text-green-100 font-bold">Message</span>
                                <textarea
                                    className="w-full h-32  bg-indigo-900 focus:bg-indigo-700 text-green-100 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3 drop-shadow-2xl" placeholder='Message' name="message" required></textarea>
                            </div>
                            <div className="mt-8  " data-aos="fade-right" data-aos-duration="2000">

                                <button
                                    type="submit"
                                    className="uppercase  w-full hover:animate-bounce text-sm font-bold tracking-wide bg-indigo-600 hover:bg-indigo-700 text-green-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline  ">
                                    <SendIcon className='animate-bounce' /> Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>





        </div>






    );
};

export default Contact;