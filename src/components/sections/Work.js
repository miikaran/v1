import forbiddenmp4 from '../img/Untitled design (1).png'
import halvatsivut from '../img/Copy of Untitled Design (1).png'
import { DiReact } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress, SiTailwindcss, SiJavascript, SiFirebase, SiPhp } from 'react-icons/si'
import { GrHeroku } from 'react-icons/gr'
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'


export default function Work(){

    return(
        <div className="bg-dark2 font-roboto work">
            <div className="flex justify-center pb-20">

                <div className="absolute text-gray opacity-10 tracking-widest mt-10 bgtext" style={{fontSize: '11rem', left: '6vw'}}>
                    MY WORK
                </div>


                <div className="mt-32">

                    <div className="py-4">
                        <span className="text-white flex border-white rounded-sm text-4xl px-4 sm:text-6xl px-5 sm:px-0 ">
                        <hr className="w-8 border-2 border-yellow mt-6 mx-2 rounded-full abouthr"></hr> 
                        MY LATEST WORK
                        <hr className="w-32 border-2 border-yellow mt-6 mx-5 rounded-full abouthr"></hr></span>        
                    </div> 

                    <div className="block lg:flex lg:mt-24">

                        <div className="py-12 lg:border-r-8 border-r-gray">
                            <img className="max-w-sm lg:max-w-md xl:max-w-2xl mx-20 lg:mx-4 border-l-8 border-b-8 border-t-8 border-gray border-opacity-30 halvatsivut" src={forbiddenmp4} alt="Youtube Downloader Website" />           
                        </div>
                        
                        <div className="bg-dark opacity-90 px-0 sm:px-14 py-9 max-w-4xl border-r-8 border-t-8 border-l-8 border-b-8 border-dark border-l-gray">
                            <span className="text-4xl sm:text-5xl text-white mx-4">forbidden.<span className="text-yellow">MP4</span> 
                            <hr className="w-20 border-2 border-white mt-6 mx-5 rounded-full abouthr"></hr>
                            </span>
                            
                            <p className="mx-5 mt-4 sm:mt-0 font-robotolight text-md text-white sm:text-xl">
                            Forbidden.MP4 is a tool which you can use to download <b>videos</b>, <b>audios</b> & <b>shorts</b> from youtube.
                            It uses npm package called <b>YTDL-core</b> to upload the content to server and from there download it to the client.
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

                            <div className="mt-2 mx-4 block sm:flex space-y-2 sm:space-y-0 gap-4">
                                <a href="/" className="bg-yellow px-8 text-xl py-3 flex">LIVE DEMO <BiLinkExternal className="mx-2  text-2xl" /></a>
                                <a href="/" className="bg-lightyellow px-8 text-xl py-3 flex">SOURCE CODE <AiFillGithub className="mx-2 text-2xl" /></a>
                            </div>

                        </div>
                    </div>

                    <div className="block lg:flex mt-12">

                        <div className="bg-dark opacity-90 px-0 sm:px-14 py-9 max-w-4xl border-b-8 border-t-8 border-r-8 border-dark border-r-gray">
                            <span className="text-4xl sm:text-5xl text-white mx-4">
                            Halvatsivut.fi
                            <hr className="w-20 border-2 border-white mt-6 mx-5 rounded-full abouthr"></hr>
                            </span>
                            
                            <p className="mx-5 mt-4 sm:mt-0 font-robotolight text-md text-white sm:text-xl">
                            <a className="underline text-red">Halvatsivut.fi</a> is a one page static website for my freelance stuff. 
                            At the site you can find information about me and the services i sell.
                            </p>

                            <br />

                            <span className="text-2xl mx-4 text-white">TECH STACK</span>

                            <ul className="bg-dark2 mx-4 font-robotolight sm:grid sm:grid-cols-2 py-4 mt-2 space-y-4">
                                <li className="flex text-xl mt-2 text-white">
                                <AiFillHtml5 className="text-3xl text-red mx-2" /> HTML
                                </li>          
                                <li className="flex text-xl text-white">
                                <SiTailwindcss className="text-3xl mx-2 text-sky" />TailWindCSS
                                </li>
                                <li className="flex text-xl text-white">
                                <SiJavascript className="text-3xl mx-2 text-yellow" /> JavaScript ES6
                                </li>
                                <li className="flex text-xl text-white">
                                <SiPhp className="text-3xl mx-2 text-gray" /> PHP
                                </li>
                            </ul>

                            <br />

                            <div className="mt-2 mx-4 block sm:flex space-y-2 sm:space-y-0 gap-4">
                                <a className="bg-yellow px-8 text-xl py-3 flex">LIVE DEMO <BiLinkExternal className="mx-2  text-2xl" /></a>
                                <a className="bg-lightyellow px-8 text-xl py-3 flex">SOURCE CODE <AiFillGithub className="mx-2 text-2xl" /></a>
                            </div>

                        </div>

                        <div className="py-12 lg:border-l-8 border-l-gray">
                            <img className="max-w-sm lg:max-w-md xl:max-w-2xl mx-20 lg:mx-4 border-r-8 border-b-8 border-t-8 border-gray border-opacity-20 halvatsivut" src={halvatsivut} alt="Freelance website" />           
                        </div>
                    </div> 

                </div>  
        </div> 
   </div>                  
    )

}