import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer';
import SneakerItem from './SneakerItem';
import ShoppingList from './ShoppingList';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

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


  return (
    <div>
      <Banner />
      <ShoppingList onAddToCart={addToCart} />
      <Cart cartItems={cart} />


      {/* <Footer /> */}
    </div>
  );
}

export default App;
