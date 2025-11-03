import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import { useEffect, useState } from 'react';

function App() {

  /* Gestion Cart */
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

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
    <div>
      <Banner cartItems={cart} onRemoveFromCart={removeFromCart} onClearCart={clearCart} />
      <ShoppingList onAddToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
