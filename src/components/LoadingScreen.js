import React from 'react';

export default function LoadingScreen(){

    return(

        <div className="fixed w-screen">
            <div className="flex justify-center pt-96">
                <div className="text-4xl text-white bg-gray">
                    Loading....
                </div>
            </div>
        </div>

    )
}