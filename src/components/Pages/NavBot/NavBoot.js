import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBot() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='nav-collapse' id="justify-content-end"  >
                    <Nav className='ms-auto'>
                        <Nav.Link href="#about" className="mb-2 mb-lg-0" style={{ fontSize: 20 }} onClick={() => scrollToSection("about")}>About</Nav.Link>
                        <Nav.Link href="#experience" className="mb-2 mb-lg-0" style={{ fontSize: 20 }} onClick={() => scrollToSection("experience")}>Experience</Nav.Link>
                        <Nav.Link href="#project" className="mb-2 mb-lg-0" style={{ fontSize: 20 }} onClick={() => scrollToSection("project")}>Project</Nav.Link>
                        <Nav.Link href="#contact" className="mb-2 mb-lg-0" style={{ fontSize: 20 }} onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBot;