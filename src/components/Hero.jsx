import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../assest/freelancing.jpg"
import Searchbar from "./Searchbar.jsx";
import Skill from "./Skill.jsx";
import Contact from "./Contact.jsx";
import About from "./Aboutme.jsx";
import "../main.js"


const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 mt-5 justify-items-center items-center text-center">
                <div className="description text-[30px] my-auto md:text-[50px] sm:my-10 text-start" data-aos="fade-up">
                    <span>Hi there &#128075;</span>
                    <h1>
                        Are you Looking for <br></br><span id="name" className="font-bold text-[#B0BFA3] cursor-pointer">
                            Software Engineer</span>
                    </h1>
                    <p className="text-[30px] cursor-pointer font-playwrite" >
                        You are on right place
                    </p>

                    <div className="buttons text-[20px] my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-10  " >
                        <a href="/about" className=''>
                            <button type='button' id="button2" className='p-2 inline-block border-2 px-2 rounded-lg  overflow-x-hidden bg-[#94a883] border-transparent'>
                                <i className="fas fa-arrow-right text-[15px] "></i>&nbsp;
                                <span className='text-1'>
                                    About Us &nbsp;
                                </span>

                            </button>
                        </a>
                        <a href="#" className=''>
                            <button type='button' id="button" className='p-2 inline-block border-2 px-2 rounded-lg  overflow-x-hidden hover:bg-[#94a883] hover:border-transparent'>
                                <span className='text-1'>
                                    Hire me &nbsp;
                                    <i className="fas fa-arrow-right text-[15px]np"></i>
                                </span>

                            </button>
                        </a>

                    </div>
                </div>


                <div className="img" data-aos='fade-down'>
                    <div className=" relative flex justify-center">
                        <img src={banner} className="relative  rounded-lg md:w-[400px] w-[150px]" alt="" />
                    </div>
                </div>
            </div>

            <Searchbar />
            <About />
            <Skill />
            <Contact />
        </>
    )
}
export default Hero