import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
export default function footer() {
    return (
        <footer className="AdminNavbar  py-11 px-3 ">

            <div className='text-white  font-light row text-center'>
                <div className='py-2  col-sm-12 col-md-6 col-lg-4'>
                    <small className='font-bold'>Sunamganj 3110, Syleht Bangladesh.</small><br />
                    <small><CallIcon /> 01765459224 || 01877533747</small><br />
                    <small><EmailIcon /> rukon.js@gmail.com</small>
                </div>
                <div className='text-center py-2 col-sm-12 col-md-6 col-lg-4'>
                    <h4>MD. RUKON UDDIN</h4>
                    <small>MERN Stack Developer</small>
                </div>
                <div className='text-center py-2 col-sm-12 col-md-6 col-lg-4'>
                    <small className='uppercase font-bold py-2'>social media</small>
                    <ul className="list-unstyled flex  justify-center">
                        <li className="mr-6">
                            <a href="https://www.facebook.com/JsRukon" target="_blank" rel="noopener noreferrer"><FacebookOutlinedIcon className=" text-white" /></a>
                        </li>
                        <li className="mr-6">
                            <a href="https://www.linkedin.com/in/rukon-js/" target="_blank" rel="noopener noreferrer"> <LinkedInIcon className=" text-white" /></a>

                        </li>
                        <li className="mr-6">
                            <a href="https://www.instagram.com/rukon.js/" target="_blank" rel="noopener noreferrer"><InstagramIcon className=" text-white" /></a>

                        </li>
                        <li className="mr-6">
                            <a href="https://twitter.com/rukon_js" target="_blank" rel="noopener noreferrer"><TwitterIcon className=" text-white" /></a>

                        </li>
                        <li>
                            <a href="https://github.com/RnRukon" target="_blank" rel="noopener noreferrer"><GitHubIcon className=" text-white" /></a>

                        </li>
                    </ul>
                </div>
            </div>

            <div className='text-center'>
                <hr className=' w-4/6  mx-auto text-white' />
                <p className="lg:mb-0 text-red-500">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <span

                        className=" text-yellow-400  font-bold"
                    >
                        Rukon
                    </span>
                </p>
            </div>
        </footer>
    );
}
