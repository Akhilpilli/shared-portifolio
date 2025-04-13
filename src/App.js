import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfessionalTimeline from "./components/ProfessionalTimeline";
import MouseClickEffect from "./components/MouseClickEffect";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  
  const config = JSON.parse(process.env.REACT_APP_PORTFOLIO_DATA);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const fullscreenDivHeight =
        document.querySelector(".about-description").offsetHeight;

      if (window.scrollY > fullscreenDivHeight) {
        navbar.style.display = "flex"; // Show the navbar when scrolled beyond the fullscreen div
      } else {
        navbar.style.display = "none"; // Hide the navbar when within the fullscreen div
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, []);
  return (
    <Router>
      <MouseClickEffect />
      <section id="about">
        <About config={config} />
      </section>
      <Navbar />
      <section id="experience">
        <ProfessionalTimeline  config={config} />
      </section>
      <section id="contact">
        <Contact config={config} />
      </section>
      <Footer />
    </Router>
  );
};

export default App;
