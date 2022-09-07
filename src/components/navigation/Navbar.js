import React from 'react';
import { useState } from "react";
import { AiOutlineDownload } from 'react-icons/ai'
import { Link } from 'react-scroll'


export default function Navbar(){

    const [navbar, setNavbar] = useState(false);

    return(
        <nav className="bg-dark2 fixed w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl lg:items-center lg:flex lg:px-14">
            <div>
                <div className="flex items-center justify-between py-3 lg:py-8 lg:block">
                    <a className="text-white block font-bold text-2xl border-t-4 border-b-4 border-yellow" href="/">
                        MR
                    </a>
                    <div className="lg:hidden">
                        <button
                            className="p-2 text-gray rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div

                    className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center text-white font-raleway justify-center text-2xl gap-10 space-y-6 lg:flex lg:space-x-14 lg:space-y-0">                           
                    
                    <li>
                    <Link
                        href="about"
                        className="link cursor-pointer"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                    >
                    ABOUT
                    </Link>
                    
                    </li>

                    <li>
                    <Link
                        href="work"
                        className="link cursor-pointer"
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                    >
                    WORK
                    </Link>
                    </li>    

                    <li>
                    <Link
                        href="contact"
                        className="link cursor-pointer"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={700}
                    >
                    CONTACT
                    </Link>
                    </li>
                    
                    <li>
                    <a href="https://drive.google.com/file/d/1THJzMuktMm4OqmkZ4Fo-zTBzyPzqUNzP/view?usp=sharing" target="_blank" className="text-dark text-xl flex rounded-sm bg-white py-1 px-4  hover:bg-opacity-80">
                        RESUME <AiOutlineDownload className="mx-2 text-2xl" />
                    </a>
                    </li>         

                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}