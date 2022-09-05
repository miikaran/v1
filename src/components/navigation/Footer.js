import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer(){

    return(

        <footer className="bg-dark2 py-4">

            <div className="flex justify-center">

                <p className="text-white text-sm">
                Created By <a className="underline text-lightyellow" href="/">Miika Rantalaiho</a>
                </p> 

                <div className="flex space-x-3 mx-4">
                    <a className="text-xl text-white"><AiFillGithub /></a>
                    <a className="text-xl text-white"><FaLinkedinIn /></a>
                    <a className="text-xl text-white"><BsTwitter /></a>
                </div>

            </div>
        </footer>

     

    )
}