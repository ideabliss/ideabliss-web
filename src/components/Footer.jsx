// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white px-6 sm:px-12 py-10">
      {/* Contact Us Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-300 mt-2">Your Problem Our Solution</p>

        <div className="mt-6 max-w-2xl mx-auto">
          {/* Message Box */}
          <textarea
  placeholder="Drop your Message"
  className="w-full rounded-lg p-4 bg-white text-black h-32 resize-none"
></textarea>


          {/* Contact Input + Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 ">
            <input
              type="text"
              placeholder="Enter your Contact Number"
              className="flex-1 rounded-lg p-3  bg-white text-black"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full font-bold">
              JC
            </div>
            <p className="font-semibold">JCREA</p>
          </div>
          <p className="text-gray-400 leading-relaxed">
            we specialize in delivering high-quality mini, major, and capstone projects for diploma and engineering students. 
            From idea to execution, we ensure practical, innovative, and industry-ready solutions tailored to your need
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-300">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Contact</h3>
          <p className="text-gray-300">+91 7972873499</p>
          <p className="text-gray-300">ideabliss4@gmail.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Get the latest information</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-3 text-black rounded-l-lg"
            />
            <button className="bg-orange-500 hover:bg-orange-600 transition px-4 rounded-r-lg">
              →
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright© 2025 IdeaBliss. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
