import React, { useState } from 'react';
import H6 from '@material-tailwind/react/Heading6';
import { NavHashLink } from 'react-router-hash-link';
import AdminNavbar from './AdminNavbar';
import HomeLogo from '../img/4059356.png'
import AboutMeLogo from '../img/3666941.png'
import SkillLogo from '../img/4300002.png'
import ServiceLogo from '../img/4667890.png'
import PortfoliosLogo from '../img/4299715.png'
import ContactUsLogo from '../img/2343522.png'
import BlogLogo from '../img/3959542.png'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen navar-bg fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl  w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">

                    <H6 className="mt-2 text-center" color="yellow"> Web Developer</H6>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full text-white" />

                        <ul className="flex-col min-w-full flex list-none ">
                            <li className="rounded-lg mb-4">
                                <NavHashLink
                                    to="/#home"
                                    exact
                                    className="flex items-center gap-4 text-sm text-decoration-none  text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    onClick={() => setShowSidebar('-left-64')}
                                >
                                    <img className='icon-sidebar' src={HomeLogo} alt="" />

                                    home
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#aboutMe"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    onClick={() => setShowSidebar('-left-64')}
                                >
                                    <img className='icon-sidebar' src={AboutMeLogo} alt="" />
                                    About Me
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#skills"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    onClick={() => setShowSidebar('-left-64')}
                                >
                                    <img className='icon-sidebar' src={SkillLogo} alt="" />
                                    Skills
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#services"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    onClick={() => setShowSidebar('-left-64')}
                                >
                                    <img className='icon-sidebar' src={ServiceLogo} alt="" />
                                    Services
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#portfolio"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    onClick={() => setShowSidebar('-left-64')}
                                >
                                    <img className='icon-sidebar' src={PortfoliosLogo} alt="" />
                                    Portfolios
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#contact"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    onClick={() => setShowSidebar('-left-64')}
                                >
                                    <img className='icon-sidebar' src={ContactUsLogo} alt="" />
                                    Contact us
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2" onClick={() => setShowSidebar('-left-64')}>
                                <NavLink
                                    to="/blog"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"

                                >
                                    <img className='icon-sidebar' src={BlogLogo} alt="" />
                                    Blog
                                </NavLink>
                            </li>

                        </ul>


                    </div>
                </div>

            </div>
        </>
    );
}
