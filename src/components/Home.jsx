import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Projects from "./Projects";
import AboutUs from "./AboutUs";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <AboutUs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;