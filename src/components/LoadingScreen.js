import React from 'react';
import LoadingAnimation from './img/LoadingAnimation.gif'

export default function LoadingScreen(){

    return(

        <div className="fixed w-screen">
            <div className="flex justify-center pt-32 sm:pt-96">
                <div className="text-6xl border-t-8 border-b-8 border-yellow text-white font-bold font-raleway loading">
                    MR
                </div>
            </div>
            <div className="flex justify-center relative" style={{bottom: '12vh'}}>
                <img src={LoadingAnimation} alt="loading animation" />
            </div>
        </div>

    )
}