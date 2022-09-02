import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Home(){
    
    return(

        <div className="bg-dark h-screen hero">
            <div className="font-roboto">
                <div className="py-32 px-8 sm:py-20 sm:px-22 md:px-42 lg:px-60 xl:px-96">
                    <div className="text-white max-w-4xl text-5xl sm:text-7xl">
            
                        <div className="mt-1 leading-tight">

                            <span className="text-white text-2xl tracking-wider sm:text-4xl">MIIKA RANTALAIHO</span> <br />
                            <span className="bg-lightyellow text-dark px-4 text-5xl sm:text-7xl">FRONTEND BASED<br /></span>
                            <span className="bg-lightyellow text-dark px-4 text-5xl sm:text-7xl">WEB-DEVELOPER</span>

                            <span className="flex py-4 mx-2 space-x-4">
                            <hr className="w-24 border-2 mt-3" />
                            <a href="/"><p className="text-3xl"><AiFillGithub /></p></a>
                            <a href="/"><p className="text-3xl"><BsTwitter /></p></a>
                            <a href="/"><p className="text-3xl"><FaLinkedinIn /></p></a>
                            </span>

                            <p className="text-lg mt-2 font-robotolight">Designing & Implementing web-based applications with modern technologies.</p>


                            <div className="space-x-5 mt-7 text-lg sm:text-2xl flex">
                                <a href="/" className="border-2 px-10 tracking-widest py-2">WORK</a>
                                <a href="/" className="border-2 px-10 tracking-widest py-2">ABOUT ME</a>
                            </div>  
                        </div>  
                    </div>
                </div> 
            </div>               
        </div>
    )
}