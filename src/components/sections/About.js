import  Imgme  from '../img/Me2.jpg'
import { DiReact } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress, SiTailwindcss, SiJavascript, SiFirebase } from 'react-icons/si'


export default function About(){

    return(

        <div className="bg-dark about font-raleway md:pt-14">

            <div className="absolute text-gray opacity-10 tracking-widest mt-14 bgtext" style={{fontSize: '11rem', left: '35vw'}}>
                ABOUT ME
            </div>

            <div className="flex justify-center pb-14">

                <div className="aboutimg mt-64 max-w-md">
                    <img className="rounded-full border-8 border-r-yellow border-l-white border-b-white border-t-yellow" src={Imgme} alt="Image of a boy" />
                </div>
                        
                <div className="sm:mt-24 py-8 px-2 sm:px-14">

                    <div className="py-8 max-w-3xl">
                        <span className="text-white flex border-white rounded-sm text-3xl sm:text-6xl px-5 sm:px-0 ">

                        <hr className="w-8 border-2 border-yellow mt-6 mx-2 rounded-full abouthr"></hr> 
                        ABOUT ME
                        <hr className="w-40 border-2 border-yellow mt-6 mx-5 rounded-full abouthr"></hr></span> 

                        <p className="text-white font-robotolight py-2 mt-10 px-4 sm:px-0 text-md md:text-xl">
                        Hi!👋 I'm your + average frontend developer who specializes in
                        the design and implementation of web-based
                        applications with the help of modern technologies.
                        <br /><br />I'm currently studying Information & communication technologies at <a className="text-yellow underline">Raseko </a>
                        and my goal is to pursue a career in the software industry.
                        I'm also doing freelance stuff so feel free to check out my website for that. <a className="text-yellow underline" href="/">Halvatsivut</a>.
                        <br /> <br />
                        
                        <button className="font-roboto text-dark px-4 mt-2 border-r-8 bg-yellow py-1">READ MORE...</button>
                        <button className="font-roboto text-dark px-4 mt-2 bg-lightyellow py-1">..?</button>

                        <br /> <br />

                        <span className="text-2xl font-roboto">TECH I'VE USED RECENTLY.</span>
                        <br />

                        <ul className="sm:grid sm:grid-cols-2 py-4 mt-2 space-y-2">

                            <li className="flex text-2xl mt-2">
                            <DiReact className="text-3xl text-sky mx-2" /> ReactJS
                            </li>          
                            <li className="flex text-2xl">
                            <IoLogoNodejs className="text-3xl text-green mx-2" />NodeJS
                            </li>
                            <li className="flex text-2xl">
                            <SiTailwindcss className="text-3xl text-sky mx-2" />TailWindCSS
                            </li>
                            <li className="flex text-2xl">
                            <SiExpress className="text-3xl mx-2" /> ExpressJS
                            </li>
                            <li className="flex text-2xl">
                            <SiJavascript className="text-3xl mx-2 text-yellow" /> JavaScript ES6
                            </li>
                        </ul>
                        </p>
                    </div>  
                </div>  
            </div> 
        </div>                  

    )
}