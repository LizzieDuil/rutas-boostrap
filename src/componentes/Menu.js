import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Menu () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/about'>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to= '/contact'>Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
         </>
  );
}

export default Menu;