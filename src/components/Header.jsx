import React from 'react';
import './Header.css';
import dominoslogo from './dominoslogo.png';
import ReactDOM from 'react-dom'

import SearchIcon from './SearchIcon'; 


function Header() {
  return (
    <div className="header">
      <div className="menu">
        <a href="#">MENU</a>
      </div>
      <div className="domino-store">
        <a href="#">DOMINO'S STORE</a>
      </div>
      <div className="domino-logo">
        <a href="#">
          <img src={dominoslogo} alt="Domino's Pizza" />
        </a>
      </div>
      <div className="contact">
        <a href="#">CONTACT</a>
      </div>
      <div className="corporate-enquiry">
        <a href="#">CORPORATE ENQUIRY <SearchIcon /> </a>
        
        
        
      </div>
    </div>
  );
}

export default Header;
