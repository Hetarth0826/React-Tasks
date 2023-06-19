import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
