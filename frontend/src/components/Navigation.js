import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
  return (
    <>
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/signin'>Sign In</Nav.Link>
                        <Nav.Link href='/signup'>Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default Navigation
