import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Header.css';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <header>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span className="cart-icon cursor-pointer"><AiOutlineShoppingCart size={30} /></span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn login-btn" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn signup-btn" to="/signUp">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;