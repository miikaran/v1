import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact(){

    return(

        <div className="bg-dark2 about font-raleway">

            <div className="absolute text-gray opacity-10 tracking-widest mt-4 bgtext" style={{fontSize: '11rem', left: '29vw'}}>
                CONTACT
            </div>

            <div className="flex justify-center">
                <div className="mt-20 py-8">

                    <span className="text-white flex border-white rounded-sm text-3xl px-4 sm:text-5xl md:text-6xl px-5 sm:px-20">
                        <hr className="w-20 border-2 border-yellow mt-4 sm:mt-6 mx-2 rounded-full abouthr"></hr> 
                        CONTACT ME
                        <hr className="w-20 border-2 border-yellow mt-4 sm:mt-6 mx-5 rounded-full abouthr"></hr>
                    </span> 

                    <p className="text-white text-md text-left sm:text-center sm:text-2xl px-5 sm:px-0 font-robotolight mt-10 xl:mt-20">
                    I'm currently looking for new opportunities & ways to build my career, <br />
                    so feel free to contact me on any matter!
                    </p>

                    <div className="flex mx-4 sm:mx-0 sm:justify-center mt-10 text-white">
                        <a href="mailto:rantalaihomiika@gmail.com" className="w-52 sm:w-72 flex text-sm sm:text-lg border-2 border-yellow px-4 sm:px-14 tracking-widest rounded-sm py-3 sm:py-4">
                            CONTACT VIA <AiOutlineMail className="mt-1 mx-2" />
                        </a>
                    </div>

                </div>
            </div>

        </div>                  
        
    )
}