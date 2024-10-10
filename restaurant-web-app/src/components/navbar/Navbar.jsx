import React from "react";
import "./navbar.css";
import siteLogo from "../../assets/gericht.png";

const Navbar = () => {
  return (
    <nav className="app__navbar section__padding">
      <img src={siteLogo}></img>
      <div className="app__navbar-sitenav">
        <a href="#home">Home</a>
        <a href="#pages">Pages</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
        <a href="#landing">Landing</a>
      </div>
      <div className="app__navbar-services">
        <p>Log In / Registration</p>
        <span></span>
        <p>Book Table</p>
      </div>
    </nav>
  );
};

export default Navbar;
