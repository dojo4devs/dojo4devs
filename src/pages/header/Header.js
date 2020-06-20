import React from 'react';
import { Navbar, FormControl, Nav, Button, Form } from 'react-bootstrap';

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">dojo4devs</Navbar.Brand>
        <Nav>
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar>
  );
};

export default Header;
