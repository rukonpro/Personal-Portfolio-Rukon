import React from 'react';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import "@material-tailwind/react/tailwind.css";
import { NavHashLink } from 'react-router-hash-link';


export default function AdminNavbar({ setShowSidebar }) {

    return (
        <nav className=" bg-gray-900  py-4 px-3 fixed  z-40 w-full">
            <div className="flex items-center  justify-between md:pr-8 md:pl-10">
                <div >
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

                <div >

                    <NavHashLink to="/#home">
                        <button className='font-extrabold text-white'>
                           Mehedi
                        </button>
                    </NavHashLink>

                </div>
            </div>
        </nav>
    );
}
