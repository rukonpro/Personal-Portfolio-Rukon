import React from 'react';
import { Link } from "react-router-dom";
export default function footer() {
    return (
        <footer className="AdminNavbar py-6 px-16  text-white  font-light flex flex-col lg:flex-row justify-between items-center">
            <p className=" mb-6 lg:mb-0 text-red-500">
                Copyright &copy; {new Date().getFullYear()}{' '}
                <span

                    className="text-yellow-400 "
                >
                    Rukon
                </span>
            </p>

            <ul className="list-unstyled flex ">
                <li className="mr-6">
                    <Link
                        className="  font-medium block text-sm"

                    >
                        About Me
                    </Link>
                </li>
                <li className="mr-6">
                    <Link
                        className="  font-medium block text-sm"



                    >
                        Blog
                    </Link>
                </li>
                <li className="mr-6">
                    <Link
                        className=" font-medium block text-sm"


                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        className="  font-medium block text-sm"


                    >
                        Contact Us
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
