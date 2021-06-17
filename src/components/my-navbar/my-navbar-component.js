import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/icons/logo.png';
import './navbar.style.css';

const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between"
            >
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Education</Nav.Link>
                        <Nav.Link href="#pricing">Skills</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Contacts</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default MyNavbar;