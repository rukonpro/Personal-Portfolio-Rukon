import React from 'react';
import FacebookOutlinedIcon from '../img/1399544_facebook_material design_icon.png';
import LinkedInIcon from '../img/1399541_linkedin_material design_icon.png';
import TwitterIcon from '../img/1399538_material design_twitter_icon.png';
import InstagramIcon from '../img/1807542_instagram_icon.png';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import footerLogo from './Application-PNG-File-Download-Free.png';
import WhatsAppIcon from '../img/1807530_whatsapp_social media_chat_internet_media_icon.png';
import SkypeIcon from '../img/1399539_material design_skype_icon.png';
import Pinterest from '../img/pinterest-2-1.svg';
import Youtube from '../img/youtube-icon-5.svg';

import './Footer.css';
import { Avatar } from '@mui/material';

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',

    },
}));

export default function footer() {



    return (
        <footer className=" bg-gray-900 py-11 px-3  ">

            <div className='text-white  font-light row text-center'>


                <div className='  col-sm-12 col-md-12 col-lg-4'>
                    <div className=' d-flex justify-center'>
                        <img className="w-40  " src={footerLogo} alt="" />
                    </div>

                </div>


                <div className='py-2  col-sm-12 col-md-12 col-lg-4'>
                    <h2>Mehedi Hasan</h2>
                    <small className='font-bold'>Netrokona-2400,Mymensingh,Bangladesh. </small><br />
                    <small><CallIcon className='animate-ping' /> <a className='no-underline text-white' href="tel:+8801820232076">+8801820232076</a> || <a className='no-underline text-white' href="tel:+8801738592385">+8801738592385</a></small><br />
                    <small> <a href="mailto:sakibalmehedi23@gmail.com" className='text-white text-decoration-none'><EmailIcon className='animate-bounce' />sakibalmehedi23@gmail.com</a></small>
                </div>




                <div className='text-center py-2 col-sm-12 col-md-12 col-lg-4'>
                    <h3 className=' font-bold py-2'>Social Media</h3>
                    <ul className="list-unstyled flex  flex-wrap gap-2 justify-center mt-2 px-5">

                        <li className="mr-2">
                            <a href="https://www.linkedin.com/in/promehedi25/" target="_blank"
                               rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Linkedin"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={LinkedInIcon}/>
                                </BootstrapTooltip>
                            </a>


                        </li>
                        <li className="mr-2">
                            <a href="https://wa.me/1820232076" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="WhatsApp"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={WhatsAppIcon}/>
                                </BootstrapTooltip>
                            </a>


                        </li>

                        <li className='mr-2'>
                            <a href="https://join.skype.com/invite/yXu1Kxuk8hZF" target="_blank"
                               rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Skype"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={SkypeIcon}/>
                                </BootstrapTooltip>
                            </a>

                        </li>

                        <li className="mr-2">
                            <a href="https://www.facebook.com/promehedi23/" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Facebook"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={FacebookOutlinedIcon}/>
                                </BootstrapTooltip>
                            </a>
                        </li>
                        <li className="mr-2">
                            <a href="https://www.instagram.com/promehedi25" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Instagram"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={InstagramIcon}/>
                                </BootstrapTooltip>
                            </a>

                        </li>
                        <li className="mr-2">
                            <a href="https://twitter.com/MehediHasa13862" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="TwitterIcon"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={TwitterIcon}/>
                                </BootstrapTooltip>
                            </a>

                        </li>
                        <li className="mr-2">
                            <a href="https://twitter.com/MehediHasa13862" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="TwitterIcon"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={Pinterest}/>
                                </BootstrapTooltip>
                            </a>
                        </li>

                        <li className="mr-2">
                            <a href="https://www.youtube.com/@Promehedi25" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="TwitterIcon"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={Youtube}/>
                                </BootstrapTooltip>
                            </a>
                        </li>

                    </ul>
                </div>


            </div>

            <div className='text-center'>
                <hr className=' w-4/6  mx-auto text-white'/>
                <p className="lg:mb-0 text-red-500">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <span

                        className=" text-yellow-400  font-bold "
                    >
                        Mehedi
                    </span>
                </p>
            </div>

        </footer>
    );
}
