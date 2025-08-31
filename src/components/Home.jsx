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
      <section id="home">
        <HeroSection />
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;