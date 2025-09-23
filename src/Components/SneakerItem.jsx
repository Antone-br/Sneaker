import '../styles/SneakerItem.css';
import CustomerReview from './CustomerReview';
import { useState } from 'react';




function SneakerItem({ nom, marque, prix, style, esthetique, confort, image, bestSeller }) {

    const [showReviews, setShowReviews] = useState(false);

    const handleToggleAvis = () => {
        setShowReviews(!showReviews);
    }

    // const formatReview = (reviewType, scaleValue) => {
    //     const scaleType = reviewType === 'confort' ? '🙂' : '💖';
    //     const icons = scaleType.repeat(scaleValue);
    //     return `${reviewType}: ${icons} (${scaleValue}/5)`;
    // }
    // const handleCliclAvis = () => {
    //     const esthetismeText = formatReview('esthétisme', esthetique);
    //     const confortText =  formatReview('confort', confort);
    //     alert(`Avis pour ${nom}:\n${esthetismeText}\n${confortText}`);
    // }
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
        </div>
    );
}

export default SneakerItem;