import React, { useState } from 'react';

import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import { NavHashLink } from 'react-router-hash-link';
import AdminNavbar from './AdminNavbar';
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
                                >
                                    <Icon name="home" size="2xl" />

                                    home
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#aboutMe"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <img className='icon-sidebar' src="https://i.ibb.co/JRgKMVL/189664.png" alt="" />
                                    About Me
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#skills"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <img className='icon-sidebar' src="https://i.ibb.co/C95xrqD/1207441.png" alt="" />
                                    Skills
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#services"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <img className='icon-sidebar' src="https://i.ibb.co/7tXxXyq/3247363.png" alt="" />
                                    Services
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#portfolio"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <img className='icon-sidebar' src="https://i.ibb.co/nC0MS3W/2489699.png" alt="" />
                                    Portfolios
                                </NavHashLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavHashLink
                                    to="/#contact"
                                    className="flex items-center gap-4 text-sm text-decoration-none text-white font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <img className='icon-sidebar' src="https://i.ibb.co/1bPrPp9/2343522.png" alt="" />
                                    Contact us
                                </NavHashLink>
                            </li>

                        </ul>


                    </div>
                </div>

            </div>
        </>
    );
}
