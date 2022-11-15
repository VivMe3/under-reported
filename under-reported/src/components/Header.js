import React from 'react';
import { Navbar, Nav, NavItem, Container, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../imgs/UR_logo.png';
import '../scss/Header.scss';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/under-reported"><img src={logo} className="logo" alt="UnderReported Logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav>
                        <Link to="/business">Business</Link>
                        <Link to="/health">Health</Link>
                        <Link to="/entertainment">Entertainment</Link>
                        <Link to="/science">Science</Link>
                        <Link to="/tech">Tech</Link>
                        <Link to="/sports">Sports</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;