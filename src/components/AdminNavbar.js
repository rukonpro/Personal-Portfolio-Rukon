import React from 'react';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import "@material-tailwind/react/tailwind.css";
import { NavHashLink } from 'react-router-hash-link';
import Logo from "../img/rukon.js.png"


export default function AdminNavbar({ setShowSidebar }) {
    /*  const hash = useLocation().hash;
     const pathname = useLocation().pathname; */


    /*  const title = () => {
         if (hash === '#home') {
             return "Rukon Uddin";
         }
         else if (hash === "" && pathname === "/") {
             return "Rukon Uddin";
         }
 
         else {
             return hash?.replace('#', '') || pathname.replace('/', '');
         }
     } */

    return (
        <nav className=" bg-gray-900  md:ml-64 py-4 px-3 fixed  z-40 w-screen index-100">
            <div className="container w-full mx-auto flex items-center md:justify-end justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>

                </div>

                <div className="flex justify-end items-center ">

                    <NavHashLink to="/#home">
                        <button className='font-extrabold'>
                            {/*  <h1 className='text-lg cursor-pointer font-extrabold '>
                                <span className='text-white '>Rukon<span className='text-amber-500'>.</span>
                                </span><span className='text-green-400 text-2xl '>JS</span>
                            </h1> */}
                            <img
                                className='h-10'
                                src={Logo} alt={Logo}></img>

                        </button>
                    </NavHashLink>

                </div>
            </div>
        </nav>
    );
}
