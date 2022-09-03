import React from 'react';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { BsTwitter, BsFillInfoSquareFill } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { DiCode } from 'react-icons/di'
import { GrContact } from 'react-icons/gr'

export default function FullPage(){
    
    return(

        <div className="bg-dark2">
            <div className="font-roboto homehero flex justify-center">
                <div className="py-5 mx-8 sm:py-20 sm:mx-22 md:mr-52">
                    <div className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-8xl">       
                        <div className="leading-tight pt-32">

                            <div className="md:bg-dark2 rounded-sm pb-14 lg:px-24 herocontent">
                                <span className="text-white text-2xl tracking-tighter sm:text-5xl heroname">MIIKA RANTALAIHO,</span><br />
                                <span className="bg-lightyellow text-dark2 rounded-sm px-4 heroyellow">a Frontend Developer<br /></span>
                                <span className="bg-lightyellow text-dark2 rounded-sm px-4 heroyellow">Based In Finland...</span>

                                <span className="flex py-4 mx-2 mt-3 space-x-4">
                                    <hr className="w-10 border-2 mt-3" />
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><AiFillGithub /></p></a>
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><BsTwitter /></p></a>
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><FaLinkedinIn /></p></a>
                                    <hr className="w-32 border-2 mt-3 homehr" />
                                </span>

                                <p className="text-lg mt-2 font-robotolight">Designing & Implementing web-based applications using modern technologies.</p>

                                <div className="mt-7 text-sm sm:text-2xl space-y-4 sm:space-y-0 sm:space-x-4">
                                    <a href="/" className="border-2 px-12 tracking-widest rounded-sm py-2">WORK</a>
                                    <a href="/" className="border-2 px-12 tracking-widest rounded-sm py-2">CONTACT</a>
                                </div>
                            </div> 
                            
                        </div>
                    </div>
                </div>         
            </div>        
        </div>
    )
}