import React from "react";
import './footer.styles.scss';
import {Link} from "react-router-dom";
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className="footer-comp">
            <footer className="footer">
                <div className="footer-section">
                    <div>
                        <h2>Informatii</h2>
                        <Link to='/about'>Despre noi</Link>
                        <Link to='/terms'>Termeni si conditii</Link>
                        <Link to='/livrare'>Informatii livrare</Link>
                        <Link to='/metode'>Metode de plata</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <div>
                        <h2>Linkuri Utile</h2>
                        <Link to='/search/tapet'>Colectii tapet</Link>
                        <Link to='/search/mocheta'>Colectii mocheta</Link>
                        <Link to='/search/decoratiuni'>Decoratiuni</Link>
                        <Link to='/search/vopsea'>Vopsele decorative</Link>
                        <Link to="/search/adezivi">Adezivi</Link>
                    </div>
                </div>
                <div className="footer-section">
                    <div>
                        <h2>Servicii Clienti</h2>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/cookies'>Politica Cookies</Link>
                        <Link to='/confidentialitate'>Politica de Confidentialitate</Link>
                    </div>
                </div>
                
            </footer>
            <div className="social">
                <div className="logo-social">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="social-icons">
                    <div>
                        <p>Urmareste-ne in social media:</p>
                    </div>
                   <div className="icons">
                        <a href="https://www.facebook.com/casaroyalofficial" target="_blank" className="facebook">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/casaroyaloficial/" target="_blank" className="instagram">
                            <FaInstagram size={30} />
                        </a>
                   </div>
                </div>
                <p>&copy; Casa Royal 2022. Toate drepturile rezervate.</p>
            </div>
        </div>
    )
}

export default Footer;