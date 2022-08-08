import React, { useRef, forwardRef, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import ContactImg from "./img/Contact-img.webp";
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
                                <h1 className="titleDesign  pt-28" data-aos="zoom-out-down" data-aos-duration="2000">
                                    CONTACT ME
                                </h1>
                            </div>
                        </div>
                        <div className="mt-8 text-center" >
                            <img className=' w-full ' data-aos="fade-right" data-aos-duration="3000" src={ContactImg} alt={ContactImg} />
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="">
                            <div className='' data-aos="fade-right" data-aos-duration="2000">
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