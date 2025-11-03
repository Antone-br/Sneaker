import '../styles/Cart.css';

function Cart({ cartItems, onRemoveFromCart, onClearCart }) {

    const totalItems = cartItems.reduce((sum, item) =>
        sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) =>
        sum + (item.prix * item.quantity), 0);

    const handleRemoveFromCart = (id) => {
        console.log("l'id suppimé: ", id);
        onRemoveFromCart(id);
    };
    const handleClearCart = () => {
        onClearCart();
    }
    
    
    
    if (cartItems.length === 0) {
        return(
        <div className="cart">
            
                <h2 className='z-index-1'>Mon Panier (0)</h2>
                <p className='z-index-1'>Votre panier est vide.</p>
            </div>
            );
            } else {
                return (
                <div className="cart">
            <div className="cart-header">
                <h2>
                    Mon Panier ({totalItems})
                </h2>
            </div>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.nom} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h4>{item.nom}</h4>
                            <p>{item.marque}</p>
                            <p>Quantité : {item.quantity}</p>
                            <p className="cart-item-price">
                                {item.prix * item.quantity}€
                            </p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Supprimer l'article</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>
                    Total : {totalPrice}€
                </h3>
                <button onClick={handleClearCart}>Suppimer tout les arcticles</button>
            </div>
        </div>
    );
}

}
export default Cart;