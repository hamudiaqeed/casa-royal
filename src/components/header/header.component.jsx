import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import './header.styles.scss';
import ReactWhatsapp from "react-whatsapp";
import whatsapp from '../../assets/whatsapp.svg';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {IoMdExit} from 'react-icons/io';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchor2, setAnchor2] = useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchor2);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchor2(null);
    }

    const handleClick2 = (e) => {
        setAnchor2(e.currentTarget);
    }

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <>
            <div className="whatsapp">
                <ReactWhatsapp number="0734802222">
                    <img src={whatsapp} alt="whatsapp logo" />
                    Contacteaza-ne si prin WhatsApp
                </ReactWhatsapp>
            </div>
            <header className="header">
                
                <div className="header__content">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                            <span>Casa Royal</span>
                        </Link>
                    </div>
                    <nav className={`header__content-nav ${menuOpen && size.width < 768 ? 'isMenu' : ''}`}>
                        <ul>
                            <li>
                                <Link className="option" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                {/* <Link className="option" to="/search">
                                    PRODUSE
                                </Link> */}
                                        <Button
                                            id="basic-button"
                                            to='/search'
                                            aria-controls={open2 ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open2 ? 'true' : undefined}
                                            onClick={handleClick2}
                                            className="menu2"
                                        >
                                            PRODUSE
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchor2}
                                            open={open2}
                                            onClose={handleClose2}
                                            MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                            }}
                                            // transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                            transformOrigin={{
                                                vertical: -50,
                                                horizontal: 50,
                                              }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/search/tapet">
                                                    Tapet
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/search/profile">
                                                    Profile Decorative
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/search/mocheta">
                                                    Mocheta
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/search/vopsea">
                                                    Vopsea Decorativa
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/search/decoratiuni">
                                                    Decoratiuni
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/search/adezivi">
                                                    Adezivi
                                                </Link>
                                            </MenuItem>
                                        </Menu>
                            </li>
                            <li>
                                <Link className="option" to="/about">
                                    DESPRE
                                </Link>
                            </li>
                            <li>
                                <Link className="option" to="/contact">
                                    CONTACT
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                    <div className="important">
                                <li>
                                    <Link to="/cart" className="cart-header">
                                        <AiOutlineShoppingCart size={30} />
                                        <span>{totalNumCartItems > 0 && totalNumCartItems}</span>
                                    </Link>
                                </li>
                                {currentUser && (
                                    <>
                                        <Button
                                            id="basic-button"
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            <AiOutlineUser size={30} />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                            }}
                                            // transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                            transformOrigin={{
                                                vertical: -50,
                                                horizontal: 50,
                                              }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Link to="/dashboard">
                                                    Contul meu
                                                </Link>
                                            </MenuItem>
                                            
                                            <MenuItem onClick={handleClose}>
                                                <button onClick={() => signOut()}>
                                                    <IoMdExit />
                                                    Delogare
                                                </button>
                                            </MenuItem>
                                        </Menu>
                                    </>
                                )}
                            
                                {!currentUser && (
                                    <>
                                        <li>
                                            <Link to="/login">
                                                LOGIN
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </div>
                    <div className="header__content-toggle">
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                            ) : (
                                <AiOutlineClose onClick={menuToggleHandler} />
                            )
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

Header.defaultProps = {
    currentUser: null
};

export default Header;