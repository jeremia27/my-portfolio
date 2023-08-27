import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ height: '80px', backgroundColor: '#FAF3F0' }}>
                <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Navbar.Brand href="#home"
                        style={{
                            marginLeft: 190,
                            // fontWeight:'bold',
                            fontSize: 28
                        }}
                    >Jeremia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: 350 }}>
                            <Nav.Link href="#about" style={{ marginRight: 60, fontSize: 20 }}>About</Nav.Link>
                            <Nav.Link href="#experience" style={{ marginRight: 60, fontSize: 20 }}>Experience</Nav.Link>
                            <Nav.Link href="#project" style={{ marginRight: 60, fontSize: 20 }}>Project</Nav.Link>
                            <Nav.Link href="#contact" style={{ fontSize: 20 }}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
