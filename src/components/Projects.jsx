// Projects.jsx
import React from "react";

const projects = [
  { 
    name: "AgroPath", 
    description: "loreumjmgawfkgfjgsjszgdfjcmsgdcjmfsxgcmjdxgcmsgvxfjsfgemgfmsgfgsefkgskfgdkugfksegfsgfeksegfmjsdgfmsgcgsgfgfkesgfjegfkeufgmcxdgcmsgx A smart agriculture solution leveraging AI and IoT to monitor soil, predict crop yield, and optimize irrigation for farmers." 
  },
  { 
    name: "GenSheduler", 
    description: "An AI-powered scheduling system that automatically generates timetables, manages resources, and eliminates human errors." 
  },
  { 
    name: "Exclusely", 
    description: "An exclusive e-commerce platform offering curated products, personalized recommendations, and a seamless user experience." 
  },
];

const Projects = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-t-3xl p-8 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Lets have a look at my <span className="text-orange-500">Projects</span>
        </h2>
        <button className="bg-orange-500 text-white px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-orange-600 transition">
          See All
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] rounded-xl border border-gray-600 p-4 flex flex-col text-left"
          >
            {/* Image placeholder */}
            <div className="bg-gray-300 rounded-t-xl h-40 sm:h-52 md:h-60 mb-4"></div>
            
            {/* Project Name */}
            <p className="font-semibold text-base sm:text-lg md:text-xl mb-2">
              {project.name}
            </p>

            {/* Project Description */}
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 line-clamp-4">
              {project.description}
            </p>

            {/* View Button */}
            <button className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-600 transition w-fit">
              View →
            </button>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-6 h-2 rounded-full bg-orange-500"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
      </div>
    </div>
  );
};

export default Projects;
