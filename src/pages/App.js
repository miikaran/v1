import React from 'react';
import Navbar from '../components/navigation/Navbar'
import Hero from '../components/sections/Hero'
import SideBar from '../components/navigation/SideBar'
import About from '../components/sections/About'
import Work from '../components/sections/Work'
import Contact from '../components/sections/Contact'
import Footer from '../components/navigation/Footer'
import LoadingScreen from '../components/LoadingScreen'
import { useState, useEffect } from 'react'


export default function App(){
    

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000);
    }, []);


    return(


        <div>
            
            {loading ? (

            <div>
                <SideBar />
                <Navbar />
                <Hero />
                <About />
                <Work />
                <Contact />
                <Footer />
            </div>

            ): <LoadingScreen />}

        </div>
        
    )

}