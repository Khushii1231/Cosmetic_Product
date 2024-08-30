import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <FaFacebook/>
        <FaInstagramSquare/>
        <IoLogoTwitter/>
        
      </div>
    </footer>
  );
};

export default Footer;
