import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import AdminNavbar from './AdminNavbar';
import HomeLogo from '../img/4059356.png'
import AboutMeLogo from '../img/3666941.png'
import SkillLogo from '../img/4300002.png'
import ServiceLogo from '../img/4667890.png'
import PortfoliosLogo from '../img/4299715.png'
import ContactUsLogo from '../img/2343522.png'
import BlogLogo from '../img/3959542.png'
import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import "./Sidebar.css";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const hash = useLocation().hash;
    const pathname = useLocation().pathname;


    const menuData = [
        {
            id: 1,
            path: "/#home",
            name: "Home",
            icon: HomeLogo,
            pathname: pathname,
            hash: hash
        },
        {
            id: 2,
            path: "/#aboutMe",
            name: "About Me",
            icon: AboutMeLogo,
        },
        {
            id: 3,
            path: "/#skills",
            name: "Skills",
            icon: SkillLogo
        },
        {
            id: 4,
            path: "/#services",
            name: "Services",
            icon: ServiceLogo
        },
        {
            id: 5,
            path: "/#portfolio",
            name: "Portfollio",
            icon: PortfoliosLogo
        },
        {
            id: 6,
            path: "/#contact",
            name: "Contact",
            icon: ContactUsLogo
        },
        {
            id: 7,
            path: "/blog",
            name: "Blogs",
            icon: BlogLogo
        },
    ]

    return (
        <div >
            <div >
                <AdminNavbar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
            </div>
            <div
                className={` bg-cyan-900  fixed top-0 md:left-0 ${showSidebar}  flex-row flex-nowrap  shadow-xl  w-64 z-50 py-4 px-3 transition-all duration-300 `}
            >

                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className="mt-2 text-center text-green-400 md:text-xl text-lg font-bold font-mono">Digital Marketer</h1>
                        <div
                            className={'md:hidden'}
                        >
                            <Button
                                color="transparent"
                                buttonType="link"
                                size="lg"
                                iconOnly
                                rounded
                                ripple="light"
                                onClick={() => setShowSidebar('-left-64')}
                            >
                                <Icon name="close" size="2xl" color="white" />
                            </Button>
                        </div>
                    </div>
                    <hr className="mt-4 mb-0 min-w-full text-white " />
                </div>
                <div className="flex-col items-stretch min-h-full h-screen flex-nowrap px-0   sm:h-screen overflow-auto scroll-hidden">
                    <br />

                    <div className="flex flex-col pr-2">
                        <ul className="flex-col  min-w-full flex list-none  ">
                            {
                                menuData?.map((menu, i) => (
                                    <li key={i} className="rounded-lg mb-4 pl-0">
                                        <NavHashLink
                                            to={menu.path}
                                            className={menu.hash === "" && menu.pathname === "/" ? 'flex items-center gap-4 !font-bold no-underline text-white  px-3 py-2 rounded-lg bg-gradient-to-tr from-green-600 to-blue-800 shadow-md' : 'flex items-center gap-4 text-sm text-decoration-none text-white font-light px-3 py-2 rounded-lg'}

                                            activeClassName="bg-gradient-to-tr from-green-600 to-blue-800   text-white shadow-md transition ease-in-out delay-150  duration-300"
                                            onClick={() => setShowSidebar('-left-64')}
                                        >
                                            <img className='icon-sidebar' src={menu.icon} alt="" />

                                            {menu?.name}
                                        </NavHashLink>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>
                </div>


            </div>
            <div>
            </div>
        </div>
    );
}
