import '../datas/sneakersList';
import { sneakersList } from '../datas/sneakersList';
import '../styles/SneakerItem.css';


function SneakerItem(){
    return(
        <div>
            <ul>
                {sneakersList.map((sneaker) => (
                    <li key={sneaker.id}>{sneaker.nom}</li>
                ))}
            </ul>
        </div>
    );
}

export default SneakerItem;