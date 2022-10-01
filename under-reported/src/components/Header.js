import React from 'react';
import { Navbar, Nav, NavItem, Container, NavDropdown, MenuItem } from 'react-bootstrap';
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
                        <Nav.Link href="/business">Business</Nav.Link>
                        <Nav.Link href="/health">Health</Nav.Link>
                        <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                        <Nav.Link href="/science">Science</Nav.Link>
                        <Nav.Link href="/tech">Tech</Nav.Link>
                        <Nav.Link href="/sports">Sports</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;