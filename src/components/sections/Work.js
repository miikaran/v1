import forbiddenmp4 from '../Untitled design (1).png'
import forbiddenmp4logo from '../forbidden.MP4.png'
import { DiReact } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress, SiTailwindcss, SiJavascript, SiFirebase } from 'react-icons/si'
import { AiFillPlayCircle, AiFillCode } from 'react-icons/ai'
import { GrHeroku } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'


export default function Work(){

    return(
        <div className="bg-dark2 font-roboto work">
            <div className="flex justify-center pb-14">

                <div className="mt-32">

                    <div className="py-4">
                        <span className="text-white flex border-white rounded-sm text-3xl sm:text-6xl px-5 sm:px-0 ">
                        <hr className="w-8 border-2 border-yellow mt-6 mx-2 rounded-full abouthr"></hr> 
                        MY LATEST WORK
                        <hr className="w-32 border-2 border-yellow mt-6 mx-5 rounded-full abouthr"></hr></span>        
                    </div> 

                    <div className="block lg:flex mt-12 bg-dark">

                        <div className="px-14 py-9 max-w-4xl border-r-8 border-b-8 border-t-8 border-l-8 border-dark border-r-gray">
                            <span className="text-5xl text-white mx-4">forbidden.<span className="text-yellow">MP4</span> 
                            <hr className="w-20 border-2 border-white mt-6 mx-5 rounded-full abouthr"></hr>
                            </span>
                            
                            <p className="mx-5 font-robotolight text-xl text-white">
                            Forbidden.MP4 is a tool which you can use to download videos, audios & shorts straight from youtube.
                            It uses npm package called YTDL-core to download the content to server and from there to the client.
                            </p>

                            <br />

                            <span className="text-2xl mx-4 text-white">TECH STACK</span>

                            <ul className="bg-dark2 mx-4 font-robotolight sm:grid sm:grid-cols-3 py-4 mt-2 space-y-2">
                                <li className="flex text-xl mt-2 text-white">
                                <DiReact className="text-3xl text-sky mx-2" /> ReactJS
                                </li>          
                                <li className="flex text-xl text-white">
                                <IoLogoNodejs className="text-3xl text-green mx-2" />NodeJS
                                </li>
                                <li className="flex text-xl text-white">
                                <SiTailwindcss className="text-3xl text-sky mx-2" />TailWindCSS
                                </li>
                                <li className="flex text-xl text-white">
                                <SiExpress className="text-3xl mx-2" /> ExpressJS
                                </li>
                                <li className="flex text-xl text-white">
                                <SiFirebase className="text-3xl mx-2 text-yellow" /> Firebase
                                </li>
                                <li className="flex text-xl text-white">
                                <GrHeroku className="text-3xl mx-2 text-purple" /> Heroku
                                </li>
                            </ul>

                            <br />

                            <div className="mt-2 mx-4 flex gap-4">
                                <a className="bg-yellow px-8 text-2xl py-3 flex">LIVE DEMO <AiFillPlayCircle className="mx-2 text-3xl" /></a>
                                <a className="bg-lightyellow px-8 text-2xl py-3 flex">CODE <AiFillGithub className="mx-2 text-3xl" /></a>
                            </div>

                        </div>

                        <img className="lg:max-w-md xl:max-w-2xl mx-20 lg:mx-0 border-r-8 border-b-8 border-t-8 border-yellow" src={forbiddenmp4} />
               
                    </div>    
                </div>  
        </div> 
   </div>                  
    )

}