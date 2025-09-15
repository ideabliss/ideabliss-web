import React, { useState } from "react";
import { X, Github, ExternalLink } from "lucide-react";

const ProjectViewModal = ({ isOpen, onClose, project }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-[slideIn_0.3s_ease-out] relative">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Images */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Project Images</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {project.images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${project.name} screenshot ${index + 1}`}
      onClick={() => setSelectedImage(image)} // 👈 tap to open
      className="w-full h-32 sm:h-40 md:h-52 lg:h-72 xl:h-80 object-contain rounded-lg border bg-white cursor-pointer hover:opacity-90 transition"
    />
  ))}
</div>

          </div>

          {/* Project Overview */}
          <div className="mb-6 text-left md:text-left lg:text-center">
  <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
  <p className="text-gray-700 leading-relaxed">{project.overview}</p>
</div>


          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
          
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <style>
          {`
            @keyframes slideIn {
              0% { opacity: 0; transform: scale(0.9) translateY(-20px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}
        </style>
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectViewModal;
