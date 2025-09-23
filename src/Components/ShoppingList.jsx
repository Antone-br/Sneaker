import '../styles/ShoppingList.css';
import { sneakersList } from '../datas/sneakersList';
import SneakerItem from './SneakerItem';

function ShoppingList() {
    return (
        <div className='shopping-list'>
            <h2>Nos Sneakers (Antone Barbaud)</h2>
            <div className='sneakers-grid'>
                {sneakersList.map((sneaker) => (
                    <SneakerItem
                        key={sneaker.id}
                        nom={sneaker.nom}
                        marque={sneaker.marque}
                        prix={sneaker.prix}
                        style={sneaker.style}
                        esthetique={sneaker.esthetique}
                        confort={sneaker.confort}
                        image={sneaker.image}
                        bestSeller={sneaker.bestSeller}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;