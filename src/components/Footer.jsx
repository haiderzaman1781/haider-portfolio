import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation will only happen once
    });
  }, []);
  return (
    <>
      <div className="footer grid lg:grid-cols-2 mg:grid-cols-1 justify-center shadow-neutral-800 items-center  bg-[#131F22] p-10">
        <div className="text-white text-center lg:w-[70%] sm:my-10 " data-aos="fade-down" >
          <h1 className="font-bold text-[40px] text-center" style={{ fontFamily: 'Titillium' }}>
            Get in touch
          </h1>
          <p>
            Ecosystem bootstrapping learning curve lean startup disruptive. Marketing long tail disruptive agile development partner.
          </p>
          <div className="icon gap-5 m-10">
            <span className="text-[35px] mr-10 ml-5">
              <a href="" className=''>
                <i className=" iconfab fab fa-instagram-square hover:text-[#B0BFA3] "></i>
              </a>
            </span>
            <span className="text-[35px] mr-10 ml-5">
              <a href="https://www.linkedin.com/in/haider-zaman-458b61312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=''>
            <i className=" iconfab fab fa-linkedin hover:text-[#B0BFA3] "></i>
            </a>
            </span>
            <span className="text-[35px] mr-10 ml-5">
              <a href="https://wa.me/923157837844" className=''>
            <i className=" iconfab fab fa-whatsapp-square hover:text-[#B0BFA3] "></i>
            </a>
            </span>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10' data-aos="fade-up">
          <div className="radius bg-[#17262B] text-white py-10">
            <div className="py-5 text-center">
              <a href="https://github.com/haiderzaman1781?tab=repository">
                <i className="fab fa-github"></i>
              </a>
              <br />
              <a href="">
                www.Github.com
              </a>
            </div>
          </div>
          <div className="radius bg-[#17262B] text-white py-10">
            <div className="py-5 text-center">
              <i className="fas fa-envelope-circle-check"></i>
              <br />
              <a href=" mailto:haiderzaman1781@gmail.com?subject=Claiming%20your%20Services&body=Hi!%20I%20want%20to%20claim%20your%20services">
                HaiderZaman1781@gmail.com
              </a>


            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Footer