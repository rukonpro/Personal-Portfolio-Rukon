import React, { useRef } from 'react';
import './Contact.css';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
    const [open, setOpen] = React.useState(false);

    const form = useRef();


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
                <h1 className="text-purple-400 fw-bold text-2xl mb-6 pt-28 font-light uppercase" data-aos="zoom-out-down">
                    CONTACT ME
                </h1>
                <form ref={form} onSubmit={sendEmail} >
                    <div data-aos="fade-right"></div>
                    <div className=" mt-10 row ">
                        <div className="  mb-6 font-light col-sm-12 col-md-6 col-lg-6 " data-aos="fade-right">
                            <Input
                                required
                                ref={form}
                                type="text"
                                style={{ color: 'white' }}
                                placeholder="Full Name"
                                name="user_name"


                            />
                        </div>
                        <div className=" mb-6 font-light col-sm-12 col-md-6 col-lg-6" data-aos="fade-left">
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
                        <div className="w-full lg:w-12/12  font-light" data-aos="fade-right">
                            <Input
                                required
                                style={{ color: 'white' }}
                                type="text"
                                color="purple"
                                placeholder="Subject"
                                name='subject'

                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-6 font-light" data-aos="fade-right">
                        <Textarea
                            required
                            style={{ color: 'white' }}
                            color="purple"
                            placeholder="Message"
                            name="message"

                        />
                    </div>

                    <button type="submit" className='btn btn-danger my-10 border-0  ' data-aos="fade-left">Send Message</button>
                </form>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </Stack>
            </div>

        </div>





    );
};

export default Contact;