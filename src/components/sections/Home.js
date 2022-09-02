import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import SideBar from '../navigation/SideBar'

export default function Home(){
    
    return(

        <div className="bg-dark h-screen hero bg">
            <div className="font-roboto">
                <div className="py-32 px-8 sm:py-24 sm:px-22 md:px-42 lg:px-60 xl:px-96">
                    <div className="text-white max-w-4xl text-5xl sm:text-7xl">
            
                        <div className="mt-1 leading-tight">

                            <span className="text-white text-2xl tracking-tighter sm:text-5xl">Miika Rantalaiho,</span> <br />
                            <span className="bg-lightyellow text-dark rounded-sm px-4 text-5xl sm:text-7xl">a Frontend Developer<br /></span>
                            <span className="bg-lightyellow text-dark rounded-sm px-4 text-5xl sm:text-7xl">Based In Finland.</span>
                            <SideBar />

                            <span className="flex py-4 mx-2 mt-3 space-x-4">
                                <hr className="w-32 border-2 mt-3" />
                                <a href="/"><p className="text-3xl"><AiFillGithub /></p></a>
                                <a href="/"><p className="text-3xl"><BsTwitter /></p></a>
                                <a href="/"><p className="text-3xl"><FaLinkedinIn /></p></a>
                            </span>

                            <p className="text-lg mt-2 font-robotolight">Designing & Implementing web-based applications using modern technologies.</p>

                            <div className="space-x-5 mt-7 text-lg sm:text-2xl flex">
                                <a href="/" className="border-2 px-10 tracking-widest rounded-sm py-2">WORK</a>
                                <a href="/" className="border-2 px-12 tracking-widest rounded-sm py-2">ABOUT ME</a>
                            </div>  
                        </div>  
                    </div>
                </div> 
            </div>               
        </div>
    )
}