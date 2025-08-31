import React, { useState, useEffect } from "react";
import ProjectViewModal from "./ProjectViewModal";

const projects = [
  { 
    name: "AgroPath", 
    description: "A smart agriculture solution leveraging AI and IoT to monitor soil, predict crop yield, and optimize irrigation for farmers.",
    overview: "AgroPath is a comprehensive smart agriculture platform that combines AI and IoT technologies to revolutionize farming practices. The system monitors soil conditions, weather patterns, and crop health in real-time, providing farmers with actionable insights to optimize their yield and reduce resource waste.",
    techStack: ["React", "Node.js", "MongoDB", "IoT Sensors", "Python", "TensorFlow", "AWS"],
    githubLink: "https://github.com/ideabliss/agropath",
    liveLink: "https://agropath-demo.com",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  { 
    name: "GenSheduler", 
    description: "An AI-powered scheduling system that automatically generates timetables, manages resources, and eliminates human errors.",
    overview: "GenSheduler is an intelligent timetable generation system that uses advanced algorithms to create optimal schedules for educational institutions. It considers multiple constraints like teacher availability, room capacity, and subject requirements to generate conflict-free timetables.",
    techStack: ["Java", "Spring Boot", "MySQL", "Angular", "Genetic Algorithm"],
    githubLink: "https://github.com/ideabliss/gensheduler",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  { 
    name: "Exclusely", 
    description: "An exclusive e-commerce platform offering curated products, personalized recommendations, and a seamless user experience.",
    overview: "Exclusely is a premium e-commerce platform that focuses on curated, high-quality products. The platform uses machine learning to provide personalized recommendations and offers a seamless shopping experience with advanced search and filtering capabilities.",
    techStack: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Stripe API"],
    githubLink: "https://github.com/ideabliss/exclusely",
    liveLink: "https://exclusely-demo.com",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const handleShowAll = () => setShowAll(true);
    window.addEventListener('showAllProjects', handleShowAll);
    return () => window.removeEventListener('showAllProjects', handleShowAll);
  }, []);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsViewModalOpen(true);
  };

  // If showAll = true, show all projects; else only first 4
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="bg-[#1E1E1E] rounded-t-3xl p-8 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Lets have a look at my <span className="text-orange-500">Projects</span>
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-orange-500 text-white px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-orange-600 transition"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
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
            <button 
              onClick={() => handleViewProject(project)}
              className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-600 transition w-fit"
            >
              View →
            </button>
          </div>
        ))}
      </div>

      {/* Dots Navigation (optional - only when not showing all) */}
      {!showAll && (
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-6 h-2 rounded-full bg-orange-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        </div>
      )}
      
      <ProjectViewModal 
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
