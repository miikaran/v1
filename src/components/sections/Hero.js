import React from 'react';
import { AiFillGithub} from 'react-icons/ai'
import { BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'

export default function Hero(){


    return(

        <div className="bg-dark2 xl:bg-sky">
            <div className="font-roboto homehero flex justify-center">

                <div className="py-5 mx-8 sm:py-20 sm:mx-22 md:mr-64">
                    <div className="text-white text-4xl md:text-6xl lg:text-6xl xl:text-8xl">       
                        <div className="leading-tight pt-32">

                            <div className="lg:bg-dark2 rounded-sm px-0 pb-20 lg:px-24 herocontent">
                                <span className="text-white text-2xl tracking-tighter sm:text-5xl heroname ">MIIKA RANTALAIHO,</span><br />
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">A FRONTEND DEVELOPER<br /></span>
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">BASED IN FINLAND.</span>

                                <span className="flex py-4 mx-2 mt-3 space-x-4">
                                    <hr className="w-10 border-2 rounded-full mt-3" />
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><AiFillGithub /></p></a>
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><BsTwitter /></p></a>
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><FaLinkedinIn /></p></a>
                                    <hr className="w-32 rounded-full border-2 mt-3 homehr" />
                                </span>

                                <p className="text-lg mt-2 font-robotolight">Designing & Implementing web-based applications using modern technologies.</p>

                                <div className="mt-7 text-sm sm:text-2xl space-y-4 sm:space-y-0 sm:space-x-4">
                                    <a href="/" className="border-2 px-12 tracking-widest herobuttons rounded-sm py-2">WORK</a>
                                    <a href="/" className="border-2 px-12 tracking-widest herobuttons rounded-sm py-2">CONTACT</a>
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}