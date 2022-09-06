import React from 'react';
import { AiFillGithub} from 'react-icons/ai'
import { BsTwitter} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { useState } from 'react'

export default function Hero(){


    return(

        <div className="bg-dark2 xl:bg-dark2">
            <div className="font-roboto homehero flex justify-start">
                <div className="py-5 sm:px-0 sm:py-20 sm:ml-20 md:ml-20 lg:ml-9">
                    <div className="text-white text-4xl sm:text-6xl md:text-7xl xl:text-8xl">       
                        <div className="leading-tight pt-32 lg:pt-52 xl:pt-14">

                            <div className="lg:bg-dark2 rounded-sm px-0 pb-14 lg:px-24 herocontent">                           
                                <span className="text-white text-3xl tracking-tighters sm:text-5xl heroname">MIIKA RANTALAIHO,</span><br />
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">YOUR <span className="text-gray">+</span>AVERAGE<br /></span>
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">FRONTEND DEVELOPER<br /></span>
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">BASED IN FINLAND.</span>                                        
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}