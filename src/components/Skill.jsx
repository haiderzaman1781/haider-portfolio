import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"


const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-[35px] hover:text-[#94a883] cursor-pointer py-10 font-playwrite">Skill's</h1>

      <section className="w-full flex justify-center">
        <div className="w-[80%] bg- py-5 text-neutral-500">
          <h1 className=" text-center font-bold text-[30px]">
            Front-End Skill <i className="fas fa-solid fa-laptop-code hover:text-blue-500 cursor-pointer"></i>
          </h1>
          <p className="text-center text-neutral-600">
            Here's the list of some my favourite <span className="text-blue-500">Front-end</span> Languages
          </p>
          <div className="flex flex-wrap  gap-5 justify-evenly mt-10">
            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0 outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-up">
                <div className='icon text-center mb-5'>
                  <i className='fas fa-brands fa-html5 text-orange-500 text-[40px] bg-white p-5 rounded-full border shadow-md'></i>
                </div>
                <div className="description">
                  <h1 className="text-center font-bold text-[20px]">
                    HTML5
                  </h1>
                  <p className="text-indent">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0	outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-up">
                <div className='icon text-center mb-5 '>
                  <i className='fas fa-brands fa-js text-yellow-500 text-[40px] bg-white p-5  rounded-full border shadow-md '></i>
                </div>
                <div className="dicription">
                  <h1 className="text-center font-bold text-[20px]">
                    JAVASCRIPT
                  </h1>
                  <p className="text-indent">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0	outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-up">
                <div className='icon text-center mb-5 '>
                  <i className='fas fa-brands fa-react text-blue-500 text-[40px] bg-white p-5 rounded-full border shadow-md '></i>
                </div>
                <div className="dicription">
                  <h1 className="text-center font-bold text-[20px]">
                    REACT
                  </h1>
                  <p className="text-indent">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0	outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-down">
                <div className='icon text-center mb-5 '>
                  <i className='fas fa-brands fa-css3 text-blue-500 text-[40px] bg-white p-5 rounded-full border shadow-md '></i>
                </div>
                <div className="dicription">
                  <h1 className="text-center font-bold text-[20px]">
                    CSS 3
                  </h1>
                  <p className="text-indent">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0	outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-down">
                <div className='icon text-center mb-5 '>
                  <i className='fas fa-brands fa-bootstrap text-blue-500 text-[40px] bg-white p-5 rounded-full border shadow-md '></i>
                </div>
                <div className="dicription">
                  <h1 className="text-center font-bold text-[20px]">
                    BOOTSTRAP 5
                  </h1>
                  <p className="text-indent">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Backend phase */}
      <section className="w-full flex justify-center">
        <div className="w-[80%] bg- py-5 text-neutral-500">
          <h1 className=" text-center font-bold text-[30px]">
            Back-End Skill <i className="fas fa-solid fa-laptop-code hover:text-blue-500 cursor-pointer"></i>
          </h1>
          <p className="text-center text-neutral-600">
            Here's the list of some my favourite <span className="text-blue-500">Back-end</span> Languages
          </p>
          <div className="flex flex-wrap  gap-5 justify-evenly mt-10">
            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0	outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-up">
                <div className='icon text-center mb-5 '>
                  <i className='fas fa-brands fa-php text-orange-500 text-[40px] bg-white p-5 rounded-full border shadow-md '></i>
                </div>
                <div className="dicription">
                  <h1 className="text-center font-bold text-[20px]">
                    PHP
                  </h1>
                  <p className="text-indent">
                    Back-End language that is use for back-End Logic
                  </p>
                </div>
              </div>
            </div>
            <div className="relative skill-card overflow-hidden p-1 rounded-lg outline outline-offset-0	outline-transparent mb-10 hover:scale-105">
              <div className="overflow-hidden bg-gray-100 shadow-md dark:shadow-sm dark:shadow-white dark:bg-[#131F22] rounded-lg px-10 py-3" data-aos="fade-up">
                <div className='icon text-center mb-5 '>
                  <i className='fas fa-solid fa-database text-yellow-500 text-[40px] bg-white p-5  rounded-full border shadow-md '></i>
                </div>
                <div className="dicription">
                  <h1 className="text-center font-bold text-[20px]">
                    MY-SQL
                  </h1>
                  <p className="text-indent">
                    Database that is use to store data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill