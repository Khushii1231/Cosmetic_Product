import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <img src="/Logoooo.jpg" alt="Logo" />
      </div>
      <div className="heading">GLOBAL COSMETICS</div>
      <div className="profile">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
