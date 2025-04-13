import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="experience" smooth={true}>Experience</Link></li>
        <li><Link to="projects" smooth={true}>Projects</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
