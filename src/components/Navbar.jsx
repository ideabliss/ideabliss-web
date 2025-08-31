import React, { useState } from "react";
import { Menu, X, Lightbulb } from "lucide-react";

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
        <span className="font-bold tracking-wider text-lg flex items-center gap-1">
          <Lightbulb className="text-white w-5 h-5" /> IDEABLISS
        </span>
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
        className="md:hidden flex items-center text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-zinc-900 rounded-b-3xl shadow-lg px-8 py-6 flex flex-col items-start space-y-4 font-medium md:hidden z-50 animate-slideDown">
          <a
            href="/"
            className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition w-full text-left"
          >
            Home
          </a>
          <a
            href="/projects"
            className="hover:text-orange-500 transition w-full py-2 rounded-lg hover:bg-zinc-800 pl-3"
          >
            Projects
          </a>
          <a
            href="/about"
            className="hover:text-orange-500 transition w-full py-2 rounded-lg hover:bg-zinc-800 pl-3"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-orange-500 transition w-full py-2 rounded-lg hover:bg-zinc-800 pl-3"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
