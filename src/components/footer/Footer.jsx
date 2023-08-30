import React from "react";

import './Footer.css'

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <FaFacebook className="icon"/>
        <FaInstagram className="icon"/>
        <FaTwitter className="icon"/>
        <FaPinterest className="icon"/>
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Companny</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>About</h3>
          <p>Companny</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>About</h3>
          <p>Companny</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>About</h3>
          <p>Companny</p>
          <p>Details</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
