import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-8">
      <div className="text-center mb-6">
        <p className="text-sm">
          We specialize in delivering high-quality mini, major, and capstone projects 
          for diploma and engineering students. From idea to execution, we ensure 
          practical, innovative, and industry-ready solutions tailored to your need.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto border-t border-gray-700 pt-6">
        <div className="mb-4 md:mb-0">© 2025 IdeaBliss. All Rights Reserved.</div>

        <div className="flex gap-6">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/projects" className="hover:text-orange-500">Projects</a>
          <a href="/about" className="hover:text-orange-500">About</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
        </div>

        <div className="mt-4 md:mt-0 text-sm">
          <a href="/" className="hover:text-orange-500">User Terms & Conditions</a> | 
          <a href="/" className="hover:text-orange-500 ml-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;