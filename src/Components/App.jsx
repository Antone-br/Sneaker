import logo from '../assets/logosneaker.jpg';
import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import SneakerItem from './SneakerItem';

function App() {
  return (
    <div>
      <Banner />
      <ShoppingList />
      <SneakerItem />
      <Footer />
    </div>
  );
}

export default App;
