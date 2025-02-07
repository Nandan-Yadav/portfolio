import React from "react";
import Handels from "./Handels";
import "../style/NavybarStyle.css";

const NavyItems = () => {
  return (
    <>
      <nav className="navy__links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="vdivider"></div>
    </>
  );
};

export default NavyItems;
