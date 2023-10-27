import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo FCPE Tinqueux.jpg";
import "../styles/Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-wrapper">
            <header className="header-container">
                <img src={logo} className="logo" alt="FCPE Logo" />
                
                <div className="burger-menu" onClick={toggleMenu}>
                    <div className={menuOpen ? 'bar cross1' : 'bar'}></div>
                    <div className={menuOpen ? 'bar cross2' : 'bar'}></div>
                    <div className={menuOpen ? 'bar cross3' : 'bar'}></div>
                </div>
                
                <nav className={menuOpen ? 'menu-dropdown' : 'desktop-menu'}>
                    <Link to="/" onClick={toggleMenu}>Accueil</Link>
                    <Link to="/team" onClick={toggleMenu}>Organigramme</Link>
                    <Link to="/about" onClick={toggleMenu}>Qui sommes nous ?</Link>
                    <Link to="/news" onClick={toggleMenu}>Actualités</Link>
                    <Link to="/partners" onClick={toggleMenu}>Nos partenaires</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    <a href="https://www.fcpe-marne.fr/adhesion/" className="join-button" target="_blank" rel="noopener noreferrer">
                        Adhésion
                    </a>
                </nav>
                
            </header>
        </div>
    );
};

export default Header;


