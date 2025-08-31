import React, { useState, useEffect } from "react";
import { Menu, X, Lightbulb } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home"); // Track active menu

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#projects', '#about', '#contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false); // Close mobile menu after click
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = ["projects", "about", "contact"];

  return (
    <nav className="relative bg-black text-white rounded-b-full w-full px-6 py-4 shadow-lg flex items-center justify-between">
      {/* Left - Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <button
          onClick={() => handleClick("#home")}
          className={`px-5 py-2 rounded-full font-semibold shadow-md transition ${
            active === "#home"
              ? "bg-orange-500 text-white"
              : "bg-transparent text-white hover:bg-orange-600"
          }`}
        >
          Home
        </button>
        {navLinks.slice(0, 1).map((link) => (
          <button
            key={link}
            onClick={() => handleClick(`#${link}`)}
            className={`transition ${
              active === `#${link}` ? "text-orange-300" : "hover:text-white"
            }`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="font-bold tracking-wider text-lg flex items-center gap-1">
          <Lightbulb className="text-white w-5 h-5" /> IDEABLISS
        </span>
      </div>

      {/* Right - Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        {navLinks.slice(1).map((link) => (
          <button
            key={link}
            onClick={() => handleClick(`#${link}`)}
            className={`transition ${
              active === `#${link}` ? "text-orange-300" : "hover:text-orange-500"
            }`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
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
          <button
            onClick={() => handleClick("#home")}
            className={`w-full py-3 px-4 text-left font-semibold shadow-md transition ${
              active === "#home"
                ? "bg-orange-500 text-white"
                : "text-white hover:bg-orange-600"
            }`}
          >
            Home
          </button>

          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(`#${link}`)}
              className={`w-full py-3 px-4 flex items-center gap-2 border-l-4 transition text-left ${
                active === `#${link}`
                  ? "text-orange-300 border-orange-500"
                  : "hover:bg-zinc-800 border-transparent hover:border-orange-500"
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
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
