// AboutUs.jsx
import React from "react";
import { Lightbulb } from "lucide-react"; // icon library (lucide-react)
import AboutUsimg from "../assets/lapi.png";


const AboutUs = () => {
  return (
    <div className="bg-orange-500 text-white rounded-3xl sm:p-10 flex flex-col md:flex-row items-center gap-6">
      
      {/* Left Text Section */}
      <div className="flex-1 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mb-4">
          About Us <Lightbulb className="w-6 h-6" />
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          <span className="italic font-medium">Ideabliss</span> is your trusted partner for academic projects. 
          We provide end-to-end solutions for diploma and engineering students, covering 
          mini, major, and capstone projects. With a focus on innovation, quality, and timely 
          delivery, we turn your project challenges into successful outcomes. 
          At <span className="italic font-medium">Ideabliss</span>, your problem truly becomes our solution.
        </p>
      </div>

      {/* Right Illustration Section */}
      <div className="flex-1 flex justify-center">
        <img 
          src= {AboutUsimg} // replace with your actual image path
          alt="About Us Illustration"
          className="max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

export default AboutUs;
