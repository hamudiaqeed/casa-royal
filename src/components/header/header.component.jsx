import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/logo.jpg';
import './header.styles.scss';
import ReactWhatsapp from "react-whatsapp";
import whatsapp from '../../assets/whatsapp.svg';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {

    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(false);
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    useEffect(() => {
        setActiveMenu(false);
    }, [location]);

    return (
        <header className="header">
            <div className="whatsapp">
                <ReactWhatsapp number="0734802222">
                    <img src={whatsapp} alt="whatsapp logo" />
                    Contacteaza-ne si prin WhatsApp
                </ReactWhatsapp>
            </div>
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="callToActions">
                            <Link className="option" to="/categories">
                            PRODUSE
                            </Link>
                            <Link className="option" to="/search">
                            CAUTA
                            </Link>
                            <Link className="option" to="/about">
                                DESPRE NOI
                            </Link>
                            <Link className="option" to="/contact">
                                CONTACT
                            </Link>
                            <Link to="/cart">
                                Your Cart ({totalNumCartItems})
                            </Link>
            
                    {currentUser && (
                        <>
                            <Link to="/dashboard">
                                My Account
                            </Link>
                            <span onClick={() => signOut()}>
                                LogOut
                            </span>
                        </>
                    )}
            
                    {!currentUser && (
                        <>
                            <Link to="/registration">
                                Register
                            </Link>
                            <Link to="/login">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
      </header>
    )
}

Header.defaultProps = {
    currentUser: null
};

export default Header;