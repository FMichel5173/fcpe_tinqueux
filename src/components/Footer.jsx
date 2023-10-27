import logoFacebook from '../assets/Logo Facebook.png';
import logoLinkedIn from '../assets/Logo LinkedIn.png';
import logoFCPE from '../assets/Logo FCPE Marne.png';
import "../styles/Footer.css";


function Footer() {
    return (
        <footer className="footer-container">
            <div className="social-links-container">
                <a href="https://www.facebook.com/FCPETinqueux" target="_blank" rel="noopener noreferrer">
                    <img src={logoFacebook} alt="Facebook Logo" />
                </a>
                <a href="https://www.linkedin.com/in/fcpe-tinqueux-276b73278/" target="_blank" rel="noopener noreferrer">
                    <img src={logoLinkedIn} alt="LinkedIn Logo" />
                </a>
                <a href="https://www.fcpe-marne.fr/" target="_blank" rel="noopener noreferrer">
                    <img src={logoFCPE} alt="FCPE Marne Logo" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;

