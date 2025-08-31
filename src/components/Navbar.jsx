import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-black text-white rounded-b-full w-full px-6 py-4 shadow-lg flex items-center justify-between">
      {/* Left - Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a
          href="/"
          className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Home
        </a>
        <a href="/projects" className="hover:text-orange-500 transition">
          Projects
        </a>
      </div>

      {/* Center Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-orange-500 w-10 h-10 rounded-full flex justify-center items-center font-bold shadow-md">
          JC
        </div>
        <span className="font-bold tracking-wider text-lg">IDEABLISS</span>
      </div>

      {/* Right - Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a href="/about" className="hover:text-orange-500 transition">
          About
        </a>
        <a href="/contact" className="hover:text-orange-500 transition">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center text-orange-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black rounded-b-2xl p-6 flex flex-col items-center space-y-6 font-medium md:hidden z-50">
          <a
            href="/"
            className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition w-full text-center"
          >
            Home
          </a>
          <a href="/projects" className="hover:text-orange-500 transition">
            Projects
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="/contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
