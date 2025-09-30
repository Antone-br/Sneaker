import React, { useState } from 'react';
import logo from '../assets/logosneaker.jpg';
import '../styles/Banner.css';
import Cart from './Cart';

function Banner({ cartItems, onRemoveFromCart, onClearCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="banner">
      <img 
        src={logo} 
        className="banner-logo" 
        alt="Logo Sneakers Store" 
      />
      
      <div className="banner-content">
        <h1>Sneakers Store</h1>
        <p>Trouvez les sneakers de vos rêves</p>

        {/* Bouton pour ouvrir/fermer le panier */}
        <button className="cart-toggle" onClick={toggleCart}>
          Mon Panier ({cartItems.length})
        </button>

        {/* Dropdown visible seulement si isOpen true */}
        {isOpen && (
          <div className="cart-dropdown">
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={onRemoveFromCart}
              onClearCart={onClearCart}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Banner;
