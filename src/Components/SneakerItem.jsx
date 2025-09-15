import '../styles/SneakerItem.css';
import CustomerReview from './CustomerReview';


function SneakerItem({nom, marque, prix, style, esthetique, confort}){
    return(
        <div className='sneaker-item'>
            <div className=''></div>
            <h3>{nom}</h3>
            <p>{marque}</p>
            <p>{prix}</p>
            <p>{style}</p>
            <div className='sneaker-review'>
                <CustomerReview reviewType='esthétisme' scaleValue={esthetique}/>
                <CustomerReview reviewType='confort' scaleValue={confort}/>
            </div>
        </div>
    );
}

export default SneakerItem;