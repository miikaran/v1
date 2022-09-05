import React from 'react';
import Navbar from '../components/navigation/Navbar'
import Hero from '../components/sections/Hero'
import SideBar from '../components/navigation/SideBar'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import Contact from '../components/sections/Contact'
import Footer from '../components/navigation/Footer'

export default function App(){

    return(

        <>
        <SideBar />
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
        </>
    )

}