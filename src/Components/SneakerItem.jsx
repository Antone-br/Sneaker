import '../styles/SneakerItem.css';
import CustomerReview from './CustomerReview';
import { useState } from 'react';


function SneakerItem({ sneakerData, onAddToCart }) {

    const { nom, marque, prix, style, esthetique, confort, image, bestSeller = false} = sneakerData;
    const [showReviews, setShowReviews] = useState(false);

    const handleToggleAvis = () => {
        setShowReviews(!showReviews);
    }
    const handleAddToCart = () => {
        console.log('Données transmises', sneakerData);
        onAddToCart(sneakerData);
    }

    return (
        <div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>
            {bestSeller && <span className='best-seller-badge'>Top vente</span>}
            <div className='sneaker-image-wrapper'>
                <img src={image} alt='' className='sneaker-image' />
            </div>
            <h3>{nom}</h3>
            <p>{marque}</p>
            <p>{prix}</p>
            <p>{style}</p>
            <div className='sneaker-review'>
                <button onClick={handleToggleAvis}>{showReviews ? 'Masquer les avis' : 'Voir les avis'}</button>
                {showReviews && (
                    <div className='avis-details'>
                        <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
                        <CustomerReview reviewType='confort' scaleValue={confort} />
                    </div>
                )}

            </div>
            <div className='sneaker-actions'>
                
                <button onClick={handleAddToCart} className='add-to-cart-btn'>
                    Ajouter au panier
                </button>
            </div>

        </div>
    );
}

export default SneakerItem;