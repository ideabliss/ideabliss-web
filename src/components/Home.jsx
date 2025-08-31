import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Home;