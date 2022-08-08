import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Typewriter from 'typewriter-effect';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import footerLogo from './Application-PNG-File-Download-Free.png';


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


                <div className='  col-sm-12 col-md-6 col-lg-4'>
                    <div className=' d-flex justify-center'>
                        <img className="w-40  " src={footerLogo} alt="" />
                    </div>

                </div>

                
                <div className='py-2  col-sm-12 col-md-6 col-lg-4'>

                    <small className='font-bold'>Sunamganj 3110, Syleht Bangladesh.</small><br />
                    <small><CallIcon className='animate-ping' /> <a className='no-underline text-white' href="tel:+8801765459224">+8801765459224</a> || <a className='no-underline text-white' href="tel:+8801877533747">8801877533747</a></small><br />
                    <small> <a href="mailto:rukon.js@gmail.com" className='text-white text-decoration-none'><EmailIcon className='animate-bounce' /> rukon.js@gmail.com</a></small>
                </div>




                <div className='text-center py-2 col-sm-12 col-md-6 col-lg-4'>

                    <small className=' font-bold py-2'>Social Media</small>
                    <ul className="list-unstyled flex  justify-center mt-2">
                        <li className="mr-6">
                            <a href="https://www.facebook.com/JsRukon" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Facebook"
                                    placement="top-end"
                                    arrow>
                                    <FacebookOutlinedIcon className=" text-white " />
                                </BootstrapTooltip>
                            </a>
                        </li>
                        <li className="mr-6">
                            <a href="https://www.linkedin.com/in/rukon-js/" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Linkedin"
                                    placement="top-end"
                                    arrow>
                                    <LinkedInIcon className=" text-white " />
                                </BootstrapTooltip>
                            </a>


                        </li>
                        <li className="mr-6">
                            <a href="https://www.instagram.com/rukon.js/" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Instagram"
                                    placement="top-end"
                                    arrow>
                                    <InstagramIcon className=" text-white " />
                                </BootstrapTooltip>
                            </a>

                        </li>
                        <li className="mr-6">
                            <a href="https://twitter.com/rukon_js" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="TwitterIcon"
                                    placement="top-end"
                                    arrow>
                                    <TwitterIcon className=" text-white " />
                                </BootstrapTooltip>
                            </a>

                        </li>
                        <li>
                            <a href="https://github.com/RnRukon" target="_blank" rel="noopener noreferrer">
                                <BootstrapTooltip
                                    title="Github"
                                    placement="top-end"
                                    arrow>
                                    <GitHubIcon className=" text-white " />
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
