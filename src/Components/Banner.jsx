import React, { useState } from 'react';
import logo from '../assets/logosneaker.jpg';
import '../styles/Banner.css';
import { Link } from 'react-router-dom';
 
function Banner({ cartItems, onRemoveFromCart, onClearCart, cartItemsCount }) {
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
      <div className="banner-container">
        <div className="banner-brand">
          <img src={logo} className="banner-logo" alt="Logo Sneakers" />
          <div className="banner-content">
            <h1>Sneakers Store</h1>
            <p>Trouvez les sneakers de vos rêves</p>
          </div>
        </div>
        
        <nav className="banner-navigation">
          <Link to="/" className="nav-link">
            Catalogue
          </Link>
          <Link to="/cart" className="nav-link">
            Panier ({cartItemsCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Banner;
