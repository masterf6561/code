import { Link } from "react-router-dom";
import React from "react";
import {useState} from "react";
import "./Navbar.css"

export const Navbar = () => {
  
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    
    if(window.scrollY >= 60){
      setScrolled(false); //change to true for this to work
    }
    else{
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={scrolled ? "Navbar active" : "Navbar"}>
      <Link
        to="/"
        className="Navbar-Link"
      >
        <button className="Navbar-button">
          Home
        </button>
      </Link>
      <Link
        to="/about"
        className="Navbar-Link"
      >
        <button className="Navbar-button">
          About
        </button>
      </Link>
      <Link
        to="Photography"
        className="Navbar-Link"
      >
        <button className="Navbar-button">
          Photography
        </button>
      </Link>
    </nav>
  )
}
