import React from 'react';
import './DominosAd.css';
import pizza from './pizza.png'
import pepperoni from './pepperoni.png'
import blackolive from './blackolive.png'

const DominosAd = () => {
  return (
    <div className="dominos-ad">
      <div className="header">
        <div className="menu">MENU</div>
        <div className="store">DOMINO'S STORE</div>
        <div className="logo">
          <img src="https://www.dominos.co.in/assets/icons/dominos.png" alt="Domino's Pizza" />
        </div>
        <div className="contact">CONTACT</div>
        <div className="corporate-enquiry">CORPORATE ENQUIRY</div>
      </div>
      <div className="content">
        <div className="text-container">
          <div className="big-text">HOT&nbsp;FRESH</div>
          <div className="toppings">
            <img src={pepperoni} alt="Pepperoni" />
            <img src={blackolive} alt="Olive" />
          </div>
        </div>
        <div className="pizza-image">
          <img src={pizza} alt="Pizza" />
        </div>
      </div>
      <div className="order-now">ORDER NOW</div>
    </div>
  );
};

export default DominosAd;