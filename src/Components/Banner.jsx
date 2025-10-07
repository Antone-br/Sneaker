import React, { useState } from 'react';
import logo from '../assets/logosneaker.jpg';
import '../styles/Banner.css';
import Cart from './Cart';

function Banner({ cartItems, onRemoveFromCart, onClearCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(prev => !prev);
  };

  const handleBlur = (event) => {
    const relatedTarget = event.relatedTarget;
    if (relatedTarget && relatedTarget.closest('.cart-dropdown')) {
      return;
    }
    setIsOpen(false);
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

        <button className="cart-toggle" onClick={toggleCart} onBlur={handleBlur} >
          Mon Panier ({cartItems.length})
        </button>

        {isOpen && (
          <div className="cart-dropdown" tabIndex={-1}>
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
