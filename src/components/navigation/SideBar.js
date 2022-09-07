import React from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export default function SideBar(){

    return(
        
        <div className="text-yellow fixed sidebar mt-60">
            <div className="sidebarsocials mx-14 text-white border-yellow border-l-2 px-4">
                <a href="mailto:rantalaihomiika@gmail.com"><p className="text-2xl py-3 hover:text-gray"><AiOutlineMail /></p></a>
                <a href="/"><p className="text-2xl py-3 hover:text-gray"><AiFillGithub /></p></a>
                <a href="/"><p className="text-2xl py-3 hover:text-gray"><FaLinkedinIn /></p></a>
            </div> 
        </div>
    )
}