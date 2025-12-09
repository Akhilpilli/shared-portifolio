import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProfessionalTimeline from "./components/ProfessionalTimeline";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  
  const config = JSON.parse(process.env.REACT_APP_PORTFOLIO_DATA);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const themeToggle = document.querySelector(".floating-theme-toggle");
      const fullscreenDivHeight =
        document.querySelector(".about-description").offsetHeight;

      if (window.scrollY > fullscreenDivHeight) {
        navbar.style.display = "flex"; // Show the navbar when scrolled beyond the fullscreen div
        if (themeToggle) {
          themeToggle.style.display = "none"; // Hide floating toggle when navbar is visible
        }
      } else {
        navbar.style.display = "none"; // Hide the navbar when within the fullscreen div
        if (themeToggle) {
          themeToggle.style.display = "flex"; // Show floating toggle when at top
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, []);
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
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
        <Footer config={config} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
