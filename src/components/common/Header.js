import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <header>
            <Navbar expand="md">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img className="logo" src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav
                            className="my-2 my-lg-0"
                        >
                            <Nav.Link c>
                                <span className="cart-icon cursor-pointer"><AiOutlineShoppingCart size={30} /></span>
                            </Nav.Link>
                            <Nav.Link className="btn login-btn" href="/login">Login</Nav.Link>
                            <Nav.Link className="btn signup-btn" href="/signUp">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;