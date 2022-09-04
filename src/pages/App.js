import React from 'react';
import Navbar from '../components/navigation/Navbar'
import Hero from '../components/sections/Hero'
import SideBar from '../components/navigation/SideBar'
import About from '../components/sections/About'
import Work from '../components/sections/Work'

export default function App(){

    return(

        <>
        <SideBar />
        <Navbar />
        <Hero />   
        <About />
        <Work />
        </>
    )

}