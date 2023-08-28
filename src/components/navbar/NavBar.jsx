import React, { useState } from "react";

// Import Styles
import "./NavBar.css";

// Import Icons
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  function handleNavClick(){
    setNav(!nav)
  }

  return (
    <nav className="navbar">
      <div className="container">
        {/*  max-width: 1240px; */}
        <div className="logo">
          <span>
            <BsFillHouseFill className="logo-svg" />
            Real
          </span>
          Estate
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="btn-nav">Sing In</button>
          </li>
        </ul>
        <div className="hamburger" onClick={handleNavClick}>
          {nav ? (<AiOutlineClose className="icon"/>) : (<HiOutlineMenu className="icon"/>)}
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
