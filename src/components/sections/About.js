import  Imgme  from '../IMG-20220625-WA0005 (1).jpg'


export default function About(){

    return(

        <div className="bg-dark about font-roboto">
         <div className="flex justify-center mt-18 pb-24">
            <div className="mt-24 bg-dark2 border-b-8 border-white py-8 px-2 sm:px-20">

                <span className="text-white flex border-white rounded-sm text-3xl sm:text-5xl px-5 sm:px-0">

                <hr className="w-8 border-2 border-yellow mt-6 mx-2 abouthr"></hr> 
                ABOUT ME
                <hr className="w-40 border-2 border-yellow mt-6 mx-5 abouthr"></hr></span> 

                <p className="text-white font-robotolight py-2 mt-5 px-4 sm:px-0 max-w-xl text-md md:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley.
                <br /> <br />
                <span className="text-3xl font-roboto ">WHY ME?</span> <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                ply dummy text of the printing and typesetting industry.
                <hr className="w-40 border-yellow border-2 mt-6" />
                </p>
                
                <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-5 text-md sm:text-2xl py-7 px-5 sm:px-0">
                    <a href="/" className="border-2  buttons text-white px-10 tracking-widest rounded-sm py-2">CONTACT</a>
                    <a href="/" className="border-2  buttons text-white px-12 tracking-widest rounded-sm py-2">RESUME</a>
                </div>  

            </div>

            <div className="aboutimg mt-24 max-w-md border-r-8 border-yellow">
                <img className="mt-0" src={Imgme} />
            </div>
                      
        </div> 
    </div>                  

    )
}