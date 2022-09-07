import React from 'react';
import gsap from 'gsap'
import { useEffect } from 'react'

export default function Hero(){

    useEffect(() => {

        gsap.fromTo(".herocontent", {opacity: 0},
        { opacity: 1, ease: "elastic.out(1, 5)", duration: 3});

    })

    return(

        <div className="bg-dark2 xl:bg-dark2">
            <div className="font-raleway homehero flex justify-start">
                <div className="py-5 sm:px-0 sm:py-20 sm:ml-20 md:ml-20 lg:ml-9"> 
                    <div className="text-white text-4xl sm:text-6xl md:text-7xl xl:text-8xl">       
                        <div className="leading-tight pt-32 md:pt-20 lg:pt-32 xl:pt-14">

                            <div className="md:bg-dark2 rounded-sm px-0 pb-14 lg:px-24 herocontent">                           
                                <span className="text-white text-3xl tracking-tighters sm:text-5xl heroname">MIIKA RANTALAIHO,</span><br />
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">Your<span className="text-gray"> +</span>Average<br /></span>
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">Frontend Developer<br /></span>
                                <span className="bg-lightyellow text-dark2 tracking-tighter rounded-sm px-4 heroyellow">Based In Finland.</span>                               
                            </div>
                      
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}