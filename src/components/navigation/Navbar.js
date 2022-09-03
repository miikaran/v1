import React from 'react';
import { useState } from "react";
import { HiOutlineLightBulb } from 'react-icons/hi'
import { DiCode } from 'react-icons/di'
import { GrContact } from 'react-icons/gr'
import { AiOutlineDownload } from 'react-icons/ai'


export default function Navbar(){

    const [navbar, setNavbar] = useState(false);

    return(
        <nav className="bg-dark2 fixed w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-8xl md:items-center md:flex md:px-14">
            <div>
                <div className="flex items-center justify-between py-3 md:py-8 md:block">
                    <a className="text-white block font-bold text-2xl border-t-4 border-b-4 border-yellow" href="/">
                        MR
                    </a>
                    <div className="md:hidden">
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

                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center font-roboto justify-center text-lg gap-10 space-y-6 md:flex md:space-x-14 md:space-y-0">

                    <li>
                    <a className="text-white link" href="/">
                        HOME
                    </a>
                    </li>

                    <li>
                    <a className="text-white link" href="#About">
                        ABOUT
                    </a>
                    </li>

                    <li>
                    <a className="link text-white" href="#Projects">
                        WORK
                    </a>
                    </li>    

                    <li>
                    <a className="text-white link" href="#Contact">
                        CONTACT
                    </a>
                    </li>
                    
                    <li>
                    <a className="text-dark flex rounded-sm bg-white py-1 px-4" href="#Contact">
                        RESUME <AiOutlineDownload className="mx-2 text-2xl" />
                    </a>
                    </li> 

                    <li>
                    <button className="text-dark text-3xl bg-lightyellow p-1 rounded-full">
                        <HiOutlineLightBulb />
                    </button>
                    </li> 

                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}