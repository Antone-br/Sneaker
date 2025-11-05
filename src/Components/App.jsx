import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (sneaker) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === sneaker.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === sneaker.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...sneaker, quantity: 1 }];
      }
    });
  };

  function removeFromCart(id) {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {

        if (item.id === id) {
          console.log("Article trouvé à supprimer : ", item);
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
            console.log("Quantité > 1, décrémentation :", item);
          } else {
            console.log("Quantité = 1, suppression totale");
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  }

  function clearCart() {
    setCart([]);
  }
  /* Fin Gestion Cart */

  
  return (
    <BrowserRouter>
      <div className="App">
        <Banner cartItemsCount={cartItemsCount} />
        <div className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  cart={cart} 
                  addToCart={addToCart} 
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cart={cart} 
                  removeFromCart={removeFromCart} 
                  clearCart={clearCart} 
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <CheckoutPage 
                  cart={cart} 
                  cartItemsCount={cartItemsCount} 
                />
              } 
            />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;