import logo from '../assets/logosneaker.jpg';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img 
                        src={logo} 
                        className="footer-logo" 
                        alt="Logo Sneakers Store" 
                    />
                    <p>Votre destination ultime pour les sneakers authentiques</p>
                </div>
                
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#accueil">Accueil</a></li>
                        <li><a href="#catalogue">Catalogue</a></li>
                        <li><a href="#promotions">Promotions</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Marques</h3>
                    <ul>
                        <li><a href="#nike">Nike</a></li>
                        <li><a href="#adidas">Adidas</a></li>
                        <li><a href="#jordan">Jordan</a></li>
                        <li><a href="#puma">Puma</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Service Client</h3>
                    <ul>
                        <li><a href="#livraison">Livraison</a></li>
                        <li><a href="#retours">Retours</a></li>
                        <li><a href="#taille">Guide des tailles</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2025 Sneakers Store. Tous droits réservés.</p>
                <div className="footer-social">
                    <a href="#facebook" aria-label="Facebook">📘</a>
                    <a href="#instagram" aria-label="Instagram">📷</a>
                    <a href="#twitter" aria-label="Twitter">🐦</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;