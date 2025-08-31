import React, { useState } from "react";
import { Menu, X, Lightbulb } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black text-white rounded-b-full w-full px-6 py-4 shadow-lg flex items-center justify-between">
      {/* Left - Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a
          href="#home"
          className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Home
        </a>
        <a href="#projects" className="hover:text-orange-500 transition">
          Projects
        </a>
      </div>

      {/* Center Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="font-bold tracking-wider text-lg flex items-center gap-1">
          <Lightbulb className="text-white w-5 h-5" /> IDEABLISS
        </span>
      </div>

      {/* Right - Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a href="#about" className="hover:text-orange-500 transition">
          About
        </a>
        <a href="#contact" className="hover:text-orange-500 transition">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
     {isOpen && (
  <div
    className="absolute top-16 left-0 w-full backdrop-blur-xl bg-zinc-900/90 
    rounded-b-3xl shadow-xl px-0 py-6 flex flex-col items-start space-y-2 
    font-medium md:hidden z-40 animate-[slideDown_0.3s_ease-out]"
  >
    {/* Full-width orange Home */}
    <a
      href="#home"
      className="bg-orange-300 text-white py-3 px-4 w-full 
      font-semibold shadow-md hover:bg-orange-600 transition text-left"
    >
      Home
    </a>

    {/* Other links */}
    {["Projects", "About", "Contact"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="w-full py-3 px-4 hover:bg-zinc-800 
        transition flex items-center gap-2 border-l-4 border-transparent 
        hover:border-orange-500"
      >
        {item}
      </a>
    ))}
  </div>
)}


      {/* Animation keyframes */}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
