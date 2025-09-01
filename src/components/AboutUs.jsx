// AboutUs.jsx
import React from "react";
import { Lightbulb, Wrench, Calendar, Target } from "lucide-react"; // added icons
import AboutUsimg from "../assets/lapi.png";

const AboutUs = () => {
  return (
    <div className="bg-orange-300 text-white sm:p-10 p-6 flex flex-col md:flex-row items-center gap-8">
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold flex justify-center md:justify-start items-center gap-2 mb-4  text-gray-900">
          About Us <Lightbulb className="w-6 h-6" />
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6  text-gray-700">
          <span className="italic font-medium">Ideabliss</span> is your trusted partner
          for academic projects. We provide end-to-end solutions for diploma and
          engineering students, covering mini, major, and capstone projects. With a
          focus on innovation, quality, and timely delivery, we turn your project
          challenges into successful outcomes. At{" "}
          <span className="italic font-medium">Ideabliss</span>, your problem truly
          becomes our solution.
        </p>

        {/* Detail Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Services */}
  <div className="bg-white/20 rounded-xl p-4 flex items-start gap-3 text-left">
    <Wrench className="w-6 h-6 text-gray-900 mt-1" />
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 text-base">Services Offered</h3>
      <p className="text-sm text-gray-700">
        Mini Projects, Major Projects, Capstone Projects
      </p>
    </div>
  </div>

  {/* Foundation Date */}
  <div className="bg-white/20 rounded-xl p-4 flex items-start gap-3 text-left">
    <Calendar className="w-6 h-6 text-gray-900 mt-1" />
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 text-base">Founded</h3>
      <p className="text-sm text-gray-700">1st January 2025</p>
    </div>
  </div>

  {/* Mission */}
  <div className="bg-white/20 rounded-xl p-4 flex items-start gap-3 sm:col-span-2 text-left">
    <Target className="w-6 h-6 text-gray-900 mt-1" />
    <div className="text-left">
      <h3 className="font-semibold text-gray-900 text-base">Our Mission</h3>
      <p className="text-sm text-gray-700">
        Empower students with innovative and practical solutions to achieve
        academic excellence.
      </p>
    </div>
  </div>
</div>


      </div>

      {/* Right Illustration Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={AboutUsimg}
          alt="About Us Illustration"
          className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;
