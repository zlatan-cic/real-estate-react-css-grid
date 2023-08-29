import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place </h1>
        <p className="search-text">
          Search largest selection of luxury high-rise flats, multi-family
          homes, and luxury homes
        </p>
        <form className="search">
          <div className="input">
            <input className="input-text" type="text" placeholder="Enter keyword..." />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;