import  Imgme  from '../../assets/Me2.jpg'
import { DiReact } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { SiExpress, SiTailwindcss, SiJavascript} from 'react-icons/si'
import { useState } from 'react'


export default function About(){


    const [more, setMore] = useState(false)
    
    const readMore = () =>{
        setMore(true)
    }

    const closeReadMore = () =>{
        setMore(false)
    }


    return(

        <div className="bg-dark about font-raleway md:pt-14">

            <div className="absolute text-gray opacity-10 tracking-widest mt-14 bgtext" style={{fontSize: '11rem', left: '35vw'}}>
                ABOUT ME
            </div>

            <div className="flex justify-center pb-14">

                <div className="aboutimg mt-64 max-w-md">
                    <img className="rounded-full border-8 border-r-yellow border-l-white border-b-white border-t-yellow" src={Imgme} alt="Boy sitting" />
                </div>
                        
                <div className="sm:mt-24 py-8 px-2 sm:px-14">

                    <div className="py-8 max-w-3xl">
                        <span className="text-white flex border-white rounded-sm text-3xl sm:text-5xl xl:text-6xl px-5 sm:px-0 ">

                        <hr className="w-8 border-2 border-yellow mt-6 mx-2 rounded-full abouthr"></hr> 
                        ABOUT ME
                        <hr className="w-40 border-2 border-yellow mt-6 mx-5 rounded-full abouthr"></hr></span> 

                        <div className="text-white font-robotolight py-2 mt-10 px-4 sm:px-0 text-md md:text-xl">
                        Hi!👋 I like to build cool things for the world wide web and create somewhat cool user interfaces/experiences.
                        I started coding the web back in the winter of 2021 and fast forward to today i've made multiple projects with different
                        technologies.
                        
                        <br /><br />
                        I'm currently studying Information & communication technologies at <a href="https://www.raseko.fi/" className="text-yellow underline">
                        Raseko</a> and searching for new opportunities to boost my career. 
            
                        <br /> <br />I'm also doing freelance stuff so feel free to check out my website for that. <a className="text-yellow underline" href="https://www.halvatsivut.fi/">Halvatsivut</a>.
                        <br /> <br />
                        
                        {more ? (

                            <div>
                            <span className="text-2xl font-bold font-raleway">MORE INFO</span> <br />
                            Hello again. 👋 I do mostly frontend stuff, but recently i've added some serverside tools to my tech stack 
                            because it brings me much more freedom to build the things i want. Check out my latest work 
                            below. Feedback is highly appreciated. 
                            <br /> <br />
                            </div>

                        ): null}
        
                        
                        {!more ? (

                            <button onClick={readMore} className="font-roboto text-dark px-4 mt-2 border-r-8 bg-yellow py-1">READ MORE...</button>

                        ): null}

                        {more ? (

                        <button onClick={closeReadMore} className="font-roboto text-dark px-4 mt-2 border-r-8 bg-yellow py-1">CLOSE</button>

                        ): null}

                        <br /> <br />

                        <span className="text-2xl font-roboto">TECH I'VE USED RECENTLY.</span>
                        <br />
                        </div>

                        <ul className="sm:grid text-white font-robotolight sm:grid-cols-2 py-4 mt-2 space-y-2">

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
                    </div>  
                </div>  
            </div> 
        </div>                  

    )
}