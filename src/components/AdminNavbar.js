import React from 'react';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import "@material-tailwind/react/tailwind.css";
import { useLocation } from 'react-router';


export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const hash = useLocation().hash;
    const pathname = useLocation().pathname;


    const title = () => {
        if (hash === '#home') {
            return "Rukon Uddin";
        }
        else if (hash === "" && pathname === "/") {
            return "Rukon Uddin";
        }

        else {
            return hash?.replace('#', '') || pathname.replace('/', '');
        }
    }
  
    return (
        <nav className="AdminNavbar md:ml-64 py-4 px-3 fixed w-screen index-100">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
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
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                            } z-50 transition-all duration-300`}
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

                <div className="flex justify-between items-center w-full">
                    <button className="uppercase text-white text-sm tracking-wider font-bold mt-1 cursor-pointer">
                        {/* {hash === '#home' ? 'Rukon Uddin' : hash?.replace('#', '') || pathname.replace('/', 'Rukon Uddin')} */}
                        {title()}
                    </button>


                </div>
            </div>
        </nav>
    );
}
