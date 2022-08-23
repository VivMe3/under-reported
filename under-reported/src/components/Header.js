import React from 'react';
import { Navbar, Nav, NavItem, Container, NavDropdown, MenuItem } from 'react-bootstrap';
import '../scss/Header.scss';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">UnderReported Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav>
                        <NavDropdown
                            title="Business"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Health"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Entertainment"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Science"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Tech"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="Sports"
                        >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;