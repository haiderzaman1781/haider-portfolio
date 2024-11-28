import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { data, images } from "./data";


const Searchbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  const [Images, SetImages] = useState('');

  return (
    <>
      <h1 className="text-center font-bold text-[40px] hover:text-[#94a883] cursor-pointer font-playwrite" data-aos="fade-down">Project's</h1>
      <section className="search py-10">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h1 className="font-bold text-2xl md:text-3xl text-neutral-400">ACCESS TO MY WORK
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl">Your Ultimate Source for WEB DESIGNING</p>
          <div className="relative inline mt-6 z-10	">
            <input
              onChange={(e) => SetImages(e.target.value)}
              className="w-full md:w-[700px] border border-gray-500  rounded-md p-2 pl-10 focus:border-transparent  focus:border-0 "
              type="search" placeholder="Search Your Assets" />
            <i className="fas fa-magnifying-glass absolute top-1 left-1   px-2  border-r-2 border-neutral-500 text-neutral-400"></i>
          </div>
          <div className="text-neutral-500 lg:flex justify-center md:block md:text-center mt-4">
            <div>
              <span className="text-neutral-900">Popular categories</span>
            </div>    <div className="lg:flex gap-3 md:hidden">
              <a href="#" className=" text-neutral-700 ml-3 pl-2 ">
                 Education</a>
              <a href="#" className="text-neutral-700">Festival Days</a>
              <a href="#" className="text-neutral-700">Gym & Fitness</a>
              <a href="#" className="text-neutral-700">Uncategorized</a>
              <a href="#" className="text-neutral-700 pr-2 ">Landscapes  </a> 
            </div>
          </div>
        </div>
      </section>
        



      <div className="grid md:grid-cols-2 sm:grid-cols-1 w-30 items-center justify-center" data-aos="fade">
        {images
          .filter((image) => {
            const imageLower = Images.toLowerCase();
            return (
              imageLower === '' ||
              image.id.toString().toLowerCase().includes(imageLower) ||
              image.Title.toLowerCase().includes(imageLower)
            );
          })
          .map((image) => (
            <div className="w-full text-center py-3 flex flex-col items-center" key={image.id}>
              <iframe src={image.url} className="lg:w-[500px] md:w-[350px] sm:w-[550px] h-[400px]" ></iframe>
                <p className="text-[25px] font-bold text-neutral-400">{image.Title}</p>
            </div>
          ))}
      </div>


    </>
  );
};
export default Searchbar;

























