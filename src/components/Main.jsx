import React from 'react';
import './Main.css';
import pizza from './pizza.png';
import tomato from './tomato.png';
import pepperoni from './pepperoni.png';
import olive from './olive.png';
import onion from './onion.png';

function Main() {
  const ingredients = [
    { id: 1, className: 'onion-1', src: onion, alt: 'Onion', top: '20%', left: '20%' },
    { id: 2, className: 'onion-2', src: onion, alt: 'Onion', top: '40%', left: '15%' },
    { id: 3, className: 'tomato-2', src: tomato, alt: 'Tomato', top: '25%', left: '65%' },
    { id: 4, className: 'tomato-1', src: tomato, alt: 'Tomato', top: '40%', left: '70%' },
    { id: 5, className: 'blackolive-1', src: olive, alt: 'Black Olive', top: '25%', left: '10%' },
    { id: 6, className: 'blackolive-2', src: olive, alt: 'Black Olive', top: '60%', left: '70%' },
    { id: 7, className: 'pepperoni-1', src: pepperoni, alt: 'Pepperoni', top: '60%', left: '23%' },
    { id: 8, className: 'pepperoni-2', src: pepperoni, alt: 'Pepperoni', top: '30%', left: '90%' },
  ];
  
  return (
    <main className="main">
      <div className="pizza-container">
        <img src={pizza} alt="Pizza" className="pizza" />
      </div>

      <div className="ingredients">
        {ingredients.map((ingredient) => (
          <div className="ingredient" key={ingredient.id} style={{ top: ingredient.top, left: ingredient.left }}>
            <img src={ingredient.src} alt={ingredient.alt} />
          </div>
        ))}
      </div>

      <div className="title">
        <span>HOT & FRESH</span>
      </div>

      <div className="order-button">
        <a href="#">ORDER NOW</a>
      </div>
    </main>
  );
}

export default Main;
