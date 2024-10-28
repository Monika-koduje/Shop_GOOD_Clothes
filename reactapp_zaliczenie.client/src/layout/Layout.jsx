import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Footer } from '../../src/components/Footer.jsx';
import Headroom from 'react-headroom';
import { SignInUser } from '../pages/SignInUser.jsx';
import { ChatHelp } from '../components/ChatHelp.jsx';
import "../css/Layout.css";

export function Layout() {
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    return (
        <div className="app">
            <Headroom>
                <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary menu-nav">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="d-block">
                                <Image className="logo avatar" src="/image/logo.png" alt="Logo" layout="fill" objectFit="cover" />
                                <p className="brand-name">GOOD Clothes</p>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>
                                    <Link to="/" className="d-block">Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/about_us" className="d-block">Kontakt</Link>
                                </Nav.Link>
                                <NavDropdown title="Ubrania" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link to="/woman" className="d-block">Kobieta</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/man" className="d-block">Mężczyzna</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/kids" className="d-block">Dzieci</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/sale" className="d-block sale">Promocja!</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Image className="img-fav heart-fav" src="/image/favicon-16x16-heart.png" />
                                <Nav.Link>
                                    <Link to="/saved" className="d-block">Zapisane</Link>
                                </Nav.Link>
                                <Image className="img-fav user-fav" src="/image/favicon-16x16-user.png" />
                                <NavDropdown title="Logowanie" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item onClick={handleShowLogin}>
                                        Zaloguj się
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/new_user" className="d-block">Rejestracja</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Link to="/user" className="d-block">Konto</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Image className="img-fav basket-fav" src="/image/favicon-16x16-basket.png" />
                                <Nav.Link eventKey={2}>
                                    <Link to="/basket" className="d-block">Koszyk</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Headroom>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>

            <div className="chat-div d-flex">
                <ChatHelp />
            </div>

            <Footer />

            <SignInUser show={showLogin} handleClose={handleCloseLogin} />
        </div>
    );
}
