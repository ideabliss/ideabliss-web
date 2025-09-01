import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Services = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const items = marquee.querySelectorAll(".marquee-item");

    let totalWidth = 0;
    items.forEach((el) => (totalWidth += el.offsetWidth));

    gsap.to(marquee, {
      x: -totalWidth / 2,
      duration: 15,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -(totalWidth / 2)),
      },
    });
  }, []);

  return (
    <section className="relative bg-gray-50 py-12 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-8">Our Services</h2>

      <div className="relative w-full overflow-hidden h-16">
        {/* Left-down to right-up angled rectangle */}
        <div className="absolute inset-0 bg-orange-500  skew-x-3"></div>

        <div ref={marqueeRef} className="relative flex whitespace-nowrap">
          <span className="marquee-item mx-8 text-white text-lg font-semibold">
            Web Application ✦ Mobile Application ✦ AI & ML ✦ IoT ✦ Cloud ✦ Other Services
          </span>
          <span className="marquee-item mx-8 text-white text-lg font-semibold">
            Web Application ✦ Mobile Application ✦ AI & ML ✦ IoT ✦ Cloud ✦ Other Services
          </span>
           <span className="marquee-item mx-8 text-white text-lg font-semibold">
            Web Application ✦ Mobile Application ✦ AI & ML ✦ IoT ✦ Cloud ✦ Other Services
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
