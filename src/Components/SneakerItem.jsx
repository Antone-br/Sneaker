import '../styles/SneakerItem.css';


function SneakerItem({nom, marque, prix, style, esthetique, confort}){
    return(
        <div className='sneaker-item'>
            <h3>{nom}</h3>
            <p>{marque}</p>
            <p>{prix}</p>
            <p>{style}</p>
            <p>{esthetique}</p>
            <p>{confort}</p>
        </div>
    );
}

export default SneakerItem;