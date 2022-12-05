import React from 'react';
import FacebookOutlinedIcon from '../img/1399544_facebook_material design_icon.png';
import LinkedInIcon from '../img/1399541_linkedin_material design_icon.png';
import TwitterIcon from '../img/1399538_material design_twitter_icon.png';
import GitHubIcon from '../img/1221583_github_logo_media_social_icon.png';
import InstagramIcon from '../img/1807542_instagram_icon.png';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import footerLogo from './Application-PNG-File-Download-Free.png';
import WhatsAppIcon from '../img/1807530_whatsapp_social media_chat_internet_media_icon.png';
import SkypeIcon from '../img/1399539_material design_skype_icon.png';
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
        <footer className="AdminNavbar  py-11 px-3 ">

            <div className='text-white  font-light row text-center'>


                <div className='  col-sm-12 col-md-12 col-lg-4'>
                    <div className=' d-flex justify-center'>
                        <img className="w-40  " src={footerLogo} alt="" />
                    </div>

                </div>


                <div className='py-2  col-sm-12 col-md-12 col-lg-4'>
                    <h2>MD: RUKON UDDIN</h2>
                    <small className='font-bold'>Sunamganj 3110, Syleht Bangladesh.</small><br />
                    <small><CallIcon className='animate-ping' /> <a className='no-underline text-white' href="tel:+8801765459224">+8801765459224</a> || <a className='no-underline text-white' href="tel:+8801877533747">8801877533747</a></small><br />
                    <small> <a href="mailto:rukon.js@gmail.com" className='text-white text-decoration-none'><EmailIcon className='animate-bounce' /> rukon.js@gmail.com</a></small>
                </div>




                <div className='text-center py-2 col-sm-12 col-md-12 col-lg-4'>
                    <h3 className=' font-bold py-2'>Social Media</h3>
                    <ul className="list-unstyled flex  justify-center mt-2 px-5">

                        <li className="mr-2">
                            <a href="https://www.linkedin.com/in/rukon-js/" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Linkedin"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={LinkedInIcon} />
                                </BootstrapTooltip>
                            </a>


                        </li>
                        <li className="mr-2">
                            <a href="https://wa.me/1765459224" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="WhatsApp"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={WhatsAppIcon} />
                                </BootstrapTooltip>
                            </a>


                        </li>

                        <li className='mr-2'>
                            <a href="https://join.skype.com/invite/yXu1Kxuk8hZF" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Skype"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={SkypeIcon} />
                                </BootstrapTooltip>
                            </a>

                        </li>
                        <li className='mr-2'>
                            <a href="https://github.com/RnRukon" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Github"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={GitHubIcon} />
                                </BootstrapTooltip>
                            </a>

                        </li>

                        <li className="mr-2">
                            <a href="https://www.facebook.com/JsRukon" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Facebook"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={FacebookOutlinedIcon} />
                                </BootstrapTooltip>
                            </a>
                        </li>

                        <li className="mr-2">
                            <a href="https://www.instagram.com/rukon.js/" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Instagram"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={InstagramIcon} />
                                </BootstrapTooltip>
                            </a>

                        </li>
                        <li className="">
                            <a href="https://twitter.com/rukon_js" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="TwitterIcon"
                                    placement="top-end"
                                    arrow>
                                    <Avatar alt="Travis Howard" src={TwitterIcon} />
                                </BootstrapTooltip>
                            </a>

                        </li>

                    </ul>
                </div>




            </div>

            <div className='text-center'>
                <hr className=' w-4/6  mx-auto text-white' />
                <p className="lg:mb-0 text-red-500">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <span

                        className=" text-yellow-400  font-bold "
                    >
                        𝑅𝓊𝓀𝑜𝓃
                    </span>
                </p>
            </div>

        </footer>
    );
}
