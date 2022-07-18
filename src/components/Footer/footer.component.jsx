import React from "react";
import './footer.styles.scss';
import {Link} from "react-router-dom";
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h2>Informatii</h2>
                <Link to='/about'>Despre noi</Link>
            </div>
            <div>
                <h2>Social</h2>
                <a href="https://www.facebook.com/casaroyalofficial" target="_blank">
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/casaroyaloficial/" target="_blank">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <h2>Contact</h2>
                <Link to='/contact'>Contact</Link>
            </div>
        </footer>
    )
}

export default Footer;