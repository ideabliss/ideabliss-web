import React, { useState, useEffect } from "react";
import ProjectViewModal from "./ProjectViewModal";
import projects from "./projectsData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    const handleShowAll = () => setShowAll(true);
    window.addEventListener("showAllProjects", handleShowAll);
    return () => window.removeEventListener("showAllProjects", handleShowAll);
  }, []);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsViewModalOpen(true);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Swipe handling
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);

  const onTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    // Only trigger swipe if it's beyond threshold
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNextPage(); // swipe left → next
      } else {
        handlePrevPage(); // swipe right → prev
      }
    }

    // Reset
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const paginatedProjects = showAll
    ? projects
    : projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  return (
    <div className="bg-[#1E1E1E] rounded-t-3xl p-8 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Lets have a look at my <span className="text-orange-300">Projects</span>
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-orange-300 text-white px-4 sm:px-5 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-orange-300 transition"
        >
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>

      {/* Projects Grid with swipe handlers */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] rounded-xl border border-gray-600 p-4 flex flex-col text-left"
          >
            <div className="rounded-t-xl h-62 sm:h-52 md:h-80 mb-4 overflow-hidden bg-gray-300">
              {project.images && project.images.length > 0 ? (
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-400 flex items-center justify-center text-gray-700">
                  No Image
                </div>
              )}
            </div>

            <p className="font-semibold text-base sm:text-lg md:text-xl mb-2">{project.name}</p>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 line-clamp-4">
              {project.description}
            </p>

            <button
              onClick={() => handleViewProject(project)}
              className="bg-orange-300 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-orange-300 transition w-fit"
            >
              View →
            </button>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      {!showAll && (
        <div className="flex justify-center mt-6 space-x-2 items-center">
          <button onClick={handlePrevPage} className="text-gray-400 hover:text-white">
            ◀
          </button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                idx === currentPage ? "bg-orange-300" : "bg-gray-400"
              }`}
            ></span>
          ))}
          <button onClick={handleNextPage} className="text-gray-400 hover:text-white">
            ▶
          </button>
        </div>
      )}

      {/* Modal */}
      <ProjectViewModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
