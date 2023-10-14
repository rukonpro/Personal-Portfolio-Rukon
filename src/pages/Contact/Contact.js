import React, { useRef, forwardRef, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import ContactImg from "./img/online-wishes-bro-4628.png";
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
        <div id="contact" className='container'  >

            <div >

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </Stack>





                <div className="py-20">

                    <div className='row'>
                        <div className="col-sm-12 col-md-12 col-lg-6 ">

                            <div className="mt-8 text-center" >
                                <img className=' w-full ' data-aos="fade-right" data-aos-duration="3000" src={ContactImg} alt={ContactImg} />
                            </div>
                        </div>

                        <form className='col-sm-12 col-md-12 col-lg-6' ref={form} onSubmit={sendEmail}>
                            <div >
                                <h1 data-aos="zoom-out-down" data-aos-duration="2000">
                                    CONTACT ME
                                </h1>
                                <div data-aos="fade-right" data-aos-duration="2000">
                                    <span className="uppercase text-sm text-green-100 font-bold  ">Full Name</span>
                                    <input className="w-full bg-transparent shadow-outline border border-spacing-2  text-gray-100 mt-2 py-1 px-2 rounded-lg focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3"
                                        type="text" placeholder="Name" name="user_name" required />
                                </div>
                                <div className="mt-2" data-aos="fade-left" data-aos-duration="2000">
                                    <span className="uppercase text-sm text-green-100 font-bold">Email</span>
                                    <input className="w-full bg-transparent shadow-outline border border-spacing-2  text-gray-100 mt-1 py-1 px-2 rounded-lg focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3"
                                        type="text" placeholder='Email' name="user_email" required />
                                </div>
                                <div className="mt-2" data-aos="fade-right" data-aos-duration="2000">
                                    <span className="uppercase text-sm text-green-100 font-bold">SubJect</span>
                                    <input className="w-full bg-transparent  border border-spacing-2  text-gray-100 mt-2 py-1 px-2 rounded-lg focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3"
                                        type="text" placeholder='SubJect' name="message" required />
                                </div>
                                <div className="mt-2" data-aos="fade-left" data-aos-duration="2000">
                                    <span className="uppercase text-sm text-green-100 font-bold">Message</span>
                                    <textarea
                                        className="w-full h-32  bg-transparent  border border-spacing-2 text-green-100 mt-1 py-1 px-2 rounded-lg focus:outline-none focus:shadow-outline transform focus:translate-x-2 transition duration-300 focus:-skew-x-3 drop-shadow-2xl" placeholder='Message' name="message" required></textarea>
                                </div>
                                <div className="mt-8  " data-aos="fade-right" data-aos-duration="2000">

                                    <button
                                        type="submit"
                                        className="uppercase   hover:animate-bounce text-sm font-bold tracking-wide bg-gray-600 hover:bg-gray -700 text-green-100 p-2 rounded-lg w-full focus:outline-none focus:shadow-outline  ">
                                        <SendIcon className='animate-bounce' /> Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default Contact;