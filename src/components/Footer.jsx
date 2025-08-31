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
              IB
            </div>
            <h3 className="font-semibold text-lg">IDEABLISS</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            we specialize in delivering high-quality mini, major, and capstone projects for diploma and engineering students. 
            From idea to execution, we ensure practical, innovative, and industry-ready solutions tailored to your need
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-300">
            <a href="https://facebook.com/ideabliss" aria-label="Facebook" rel="noopener noreferrer" target="_blank"><FaFacebookF /></a>
            <a href="https://instagram.com/ideabliss" aria-label="Instagram" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            <a href="https://twitter.com/ideabliss" aria-label="Twitter" rel="noopener noreferrer" target="_blank"><FaTwitter /></a>
            <a href="https://linkedin.com/company/ideabliss" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></a>
            <a href="https://wa.me/917972873499" aria-label="WhatsApp" rel="noopener noreferrer" target="_blank"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Navigation</h3>
          <nav>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" aria-label="Home page">Home</a></li>
              <li><a href="/projects" aria-label="Our projects">Projects</a></li>
              <li><a href="/about" aria-label="About us">About Us</a></li>
              <li><a href="/contact" aria-label="Contact us">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Contact</h3>
          <address className="not-italic">
            <p className="text-gray-300"><a href="tel:+917972873499">+91 7972873499</a></p>
            <p className="text-gray-300"><a href="mailto:ideabliss4@gmail.com">ideabliss4@gmail.com</a></p>
          </address>
        </div>

        {/* Newsletter */}
        <div>
  <h3 className="text-orange-500 font-semibold mb-3">Get the latest information</h3>
  <div className="flex">
    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 p-3 bg-white text-black rounded-l-lg outline-none"
    />
    <button className="bg-orange-500 hover:bg-orange-600 transition px-4 rounded-r-lg text-white">
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
