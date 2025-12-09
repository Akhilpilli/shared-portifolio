import React from "react";
import { Link } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="experience" smooth={true}>Experience</Link></li>
        <li><Link to="projects" smooth={true}>Projects</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;
