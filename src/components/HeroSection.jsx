import React, { useState } from "react";
import BulbImg from "../assets/bulb.png";
import ProjectRequestModal from "./ProjectRequestModal";

/* ---------------- HERO SECTION ---------------- */
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   <main className="relative text-center px-4 sm:px-6  mt-28 mb-0 sm:mb-0 md:mb-0 ">

      {/* Top Text */}
      <p className="max-w-3xl mx-auto text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <span className="text-orange-500">“</span> Stuck with your project? We've got you
        covered! At Ideabliss, we specialize in delivering high-quality mini,
        major, and capstone projects for diploma and engineering students. From
        idea to execution, we ensure practical, innovative, and industry-ready
        solutions tailored to your need
        <span className="text-orange-500">“</span>
      </p>

      {/* Tagline */}
      <p className="lg:mt-6 mt-10 font-bold text-gray-700 text-base sm:text-lg md:text-xl">
        <span className="text-gray-600">❝ YOUR</span>
        <span className="text-orange-500"> PROBLEM</span>
        <span className="text-gray-600"> OUR</span>
        <span className="text-orange-500"> SOLUTION ❞</span>
      </p>

      {/* Bottom Semi Circle */}
      <div className="lg:mt-20 mt-32 bg-orange-300 rounded-t-full w-full max-w-3xl h-64 sm:h-80 md:h-96 mx-auto flex flex-col justify-center items-center text-white shadow-lg relative overflow-hidden">
        
        {/* Bulb Image */}
        <img
          src={BulbImg}
          alt="IdeaBliss - Innovative Academic Project Solutions"
          className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain"
        />

        {/* Left Stat */}
        <div className="absolute left-4 sm:left-10 md:left-16 top-1/2 -translate-y-1/2 text-left">
          <p className="text-lg sm:text-2xl md:text-3xl font-bold">10+</p>
          <p className="text-xs sm:text-sm md:text-base text-white">Projects</p>
        </div>

        {/* Right Stat */}
        <div className="absolute right-4 sm:right-10 md:right-16 top-1/2 -translate-y-1/2 text-right">
          <p className="text-base sm:text-xl md:text-2xl font-bold">24/7</p>
          <p className="text-xs sm:text-sm md:text-base text-white">
            Support
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center rounded-full bg-gradient-to-r from-[#FFE9D8] to-[#FFD6B3] p-1 shadow-md text-xs sm:text-sm md:text-base">
          {/* Left - Request */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 rounded-full bg-[#F0582B] px-3 py-1 sm:px-4 sm:py-2 text-white font-medium hover:bg-[#E04A20] transition"
          >
          Purchase Request <span className="text-sm sm:text-base">↗</span>
          </button>

          {/* Right - Explore */}
          <button 
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              // Trigger show all projects
              window.dispatchEvent(new CustomEvent('showAllProjects'));
            }}
            className="px-3 py-1 sm:px-4 sm:py-2 text-[#F0582B] font-medium hover:text-[#E04A20] transition"
          >
           Project Explore
          </button>
        </div>
      </div>
      
      <ProjectRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
};

/* ---------------- EXPORT ---------------- */
export default HeroSection;
