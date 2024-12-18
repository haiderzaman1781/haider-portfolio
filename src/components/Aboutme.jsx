import React, {  useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from "../assest/Profile.png"

const Aboutme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-[35px] hover:text-[#94a883] cursor-pointer py-10 font-playwrite" data-aos="fade-down">About Me</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-items-center items-center mb-10" data-aos="fade-down" >
        <div className="discription text-center w-[60%] " >
          <p className="text-[#B0BFA3]" style={{ fontFamily: 'Titillium' }}>Hello Welcome</p>
          <h1 className="font-bold text-[40px] "> I'M <span className="text-[#94a883]"> Haider Zaman</span></h1>
          <p> a creative Web Front-End Developer. Who can create a Responsive Website For you.</p>
          <br />
          <a href="/contact" className="">
            <button type="button" id="button2" className="p-2 inline-block border-2 px-2 rounded-lg overflow-x-hidden bg-[#94a883] border-transparent hover:bg-transparent hover:border-[#94a883]">
              <i className="fas fa-arrow-right text-[15px]"></i>&nbsp;
              <span className="text-1">Contact Us &nbsp;</span>
            </button>
          </a>
        </div>
        <div className="image" data-aos="fade-">
          <img src={pic} alt="" className='w-[200px]' />
        </div>
      </div>
    </>
    )
  }
  
export default Aboutme