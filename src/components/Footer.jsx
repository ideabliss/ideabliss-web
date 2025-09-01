// Footer.jsx
import React, { useState } from "react";
import { Lightbulb, Loader2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { submitToGoogleSheet } from "../utils/googleSheets";
import SuccessModal from "./SuccessModal";

const Footer = () => {
  const [contactData, setContactData] = useState({ message: '', contactNumber: '' });
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isContactLoading, setIsContactLoading] = useState(false);
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsContactLoading(true);
    
    const result = await submitToGoogleSheet({
      'Message': contactData.message,
      'Contact Number': contactData.contactNumber
    }, 'Contact Us');
    
    setIsContactLoading(false);
    
    if (result.success) {
      setSuccessMessage('Your message has been sent successfully! We\'ll contact you soon.');
      setShowSuccess(true);
      setContactData({ message: '', contactNumber: '' });
    } else {
      alert('Error sending message. Please try again.');
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsNewsletterLoading(true);
    
    const result = await submitToGoogleSheet({
      'Email Address': email
    }, 'Newsletter');
    
    setIsNewsletterLoading(false);
    
    if (result.success) {
      setSuccessMessage('Successfully subscribed to our newsletter!');
      setShowSuccess(true);
      setEmail('');
    } else {
      alert('Error subscribing. Please try again.');
    }
  };

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
            value={contactData.message}
            onChange={(e) => setContactData({...contactData, message: e.target.value})}
            className="w-full rounded-lg p-4 bg-white text-black h-32 resize-none"
          ></textarea>


          {/* Contact Input + Button */}
          <form onSubmit={handleContactSubmit} className="flex flex-col sm:flex-row gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter your Contact Number"
              value={contactData.contactNumber}
              onChange={(e) => setContactData({...contactData, contactNumber: e.target.value})}
              required
              className="flex-1 rounded-lg p-3 bg-white text-black"
            />
            <button 
              type="submit" 
              disabled={isContactLoading}
              className="bg-orange-300 hover:bg-orange-300 transition px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isContactLoading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Sending...
                </>
              ) : (
                'Contact Me'
              )}
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
  <div className="bg-orange-300 w-10 h-10 flex items-center justify-center rounded-full">
    <Lightbulb className="w-6 h-6 text-white" />
  </div>
  <h3 className="font-semibold text-lg">IDEABLISS</h3>
</div>
         <p className="text-gray-400 leading-relaxed text-left">
  We specialize in delivering high-quality mini, major, and capstone projects for diploma and engineering students. 
  From idea to execution, we ensure practical, innovative, and industry-ready solutions tailored to your need.
</p>


          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-300">
            <a href="https://instagram.com/ideabliss_" aria-label="Instagram" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/aditya-shinde45?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank"><FaLinkedinIn /></a>
            <a href="https://wa.me/917972873499" aria-label="WhatsApp" rel="noopener noreferrer" target="_blank"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
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
            <h3 className="text-orange-300 font-semibold mb-3">Contact Info</h3>

          <address className="not-italic">
            <p className="text-gray-300"><a href="tel:+917972873499">+91 7972873499</a></p>
            <p className="text-gray-300"><a href="mailto:ideabliss4@gmail.com">ideabliss4@gmail.com</a></p>
          </address>
        </div>

        {/* Newsletter */}
        <div>
  <h3 className="text-orange-300 font-semibold mb-3">Get the latest information</h3>
  <form onSubmit={handleNewsletterSubmit} className="flex">
    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="flex-1 p-3 bg-white text-black rounded-l-lg outline-none"
    />
    <button 
      type="submit" 
      disabled={isNewsletterLoading}
      className="bg-orange-300 hover:bg-orange-300 transition px-4 rounded-r-lg text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isNewsletterLoading ? (
        <Loader2 className="animate-spin" size={16} />
      ) : (
        '→'
      )}
    </button>
  </form>
</div>

      </div>

      <hr className="border-gray-600 my-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright© 2025 IdeaBliss. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">User Terms & Conditions | Privacy Policy</p>
      </div>
      
      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message={successMessage}
      />
    </footer>
  );
};

export default Footer;
