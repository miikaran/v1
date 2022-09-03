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
                <div className="py-5 mx-8 sm:py-24 sm:mx-22 md:mr-52">
                    <div className="text-white text-4xl md:text-7xl xl:text-8xl">       
                        <div className="leading-tight pt-32">

                            <div className="md:bg-dark2 px-0 rounded-sm px-6 pb-14 lg:px-24">
                                <span className="text-white text-2xl tracking-tighter sm:text-5xl heroname">MIIKA RANTALAIHO,</span><br />
                                <span className="bg-lightyellow text-dark2 rounded-sm px-4 heroyellow">FRONTEND DEVELOPER<br /></span>
                                <span className="bg-lightyellow text-dark2 rounded-sm px-4 heroyellow">BASED IN FINLAND.</span>

                                <span className="flex py-4 mx-2 mt-3 space-x-4">
                                    <hr className="w-10 border-2 mt-3" />
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><AiFillGithub /></p></a>
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><BsTwitter /></p></a>
                                    <a href="/"><p className=" text-2xl sm:text-3xl"><FaLinkedinIn /></p></a>
                                    <hr className="w-32 border-2 mt-3 homehr" />
                                </span>

                                <p className="text-lg mt-2 font-robotolight">Designing & Implementing web-based applications using modern technologies.</p>

                                <div className="mt-7 text-lg sm:text-2xl space-y-4 sm:space-y-0 sm:space-x-4">
                                    <a href="/" className="border-2 px-12 tracking-widest rounded-sm buttons py-2">WORK</a>
                                    <a href="/" className="border-2 px-12 tracking-widest rounded-sm buttons py-2">CONTACT</a>
                                </div>
                            </div> 

                        </div>
                    </div>
                </div>         
            </div>

            <div className="bg-dark about font-roboto">
                <div className="flex justify-center mt-18 pb-24">

                    <div className="mt-24 max-w-sm px-5 border-r-8 border-yellow">
                        <img className="mt-12" src="https://cdn-icons-png.flaticon.com/512/320/320368.png?w=360" />
                    </div>
                  
                    <div className="mt-24 bg-dark2 py-4 px-14">

                        <span className="text-white flex border-white rounded-sm text-3xl sm:text-5xl px-5 sm:px-0">
                            
                        <hr className="w-8 border-2 border-yellow mt-6 mx-2 abouthr"></hr> 
                        ABOUT ME
                        <hr className="w-40 border-2 border-yellow mt-6 mx-5 abouthr"></hr></span> 

                        <p className="text-white font-robotolight py-2 mt-5 px-4 sm:px-0 max-w-xl text-md md:text-xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.
                        <br /> <br />
                        <span className="text-3xl font-roboto ">WHY ME?</span> <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        ply dummy text of the printing and typesetting industry.
                        <hr className="w-40 border-yellow border-2 mt-6" />
                        </p>
                        

                        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-5 text-md sm:text-2xl py-7 px-5 sm:px-0">
                            <a href="/" className="border-2  buttons text-white px-10 tracking-widest rounded-sm py-2">CONTACT</a>
                            <a href="/" className="border-2  buttons text-white px-12 tracking-widest rounded-sm py-2">RESUME</a>
                        </div>  

                    </div>

                    <div className="mt-24 bg-dark2 py-10 px-14 border-t-2 border-b-2 border-white border-r-2">
                    </div>
                </div> 

            </div>                          
        </div>
    )
}