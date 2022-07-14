import React from "react";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.jpg';
import './header.styles.scss';
import ReactWhatsapp from "react-whatsapp";
import whatsapp from '../../assets/whatsapp.svg';
import {auth} from '../../firebase/utils';

const Header = ({currentUser}) => {
    return (
        <div className="header">
            <div className="whatsapp">
                <ReactWhatsapp number="0734802222">
                    <img src={whatsapp} alt="whatsapp logo" />
                    Contacteaza-ne si prin WhatsApp
                </ReactWhatsapp>
            </div>
            <div className="navbar">
                <Link to="/" className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <div className="options">
                    <Link className="option" to="/categories">
                        PRODUSE
                    </Link>
                    <Link className="option" to="/about">
                        DESPRE NOI
                    </Link>
                    <Link className="option" to="/contact">
                        CONTACT
                    </Link>
                    {
                        currentUser ? (
                            <div>
                                <Link className="option" to='/dashboard'>
                                    MY ACCOUNT
                                </Link>
                                <button className="option" onClick={() => auth.signOut()}>LOGOUT</button>
                            </div>
                        ) : (
                            <div>
                                <Link className="option" to='/registration'>
                                    REGISTER
                                </Link>
                                <Link className="option" to='/login'>
                                    LOGIN
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);