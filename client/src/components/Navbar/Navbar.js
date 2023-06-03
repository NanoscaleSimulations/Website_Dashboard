import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import SignUp from '../CTA/SignUp';




function CollapsibleExample () {
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark" style={{zIndex:99}}>
        <Container>
            <Navbar.Brand href="/landing"><img style={{height:'70px', paddingRight:'0px'}} src={require('../../img/logo.png')} alt="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="/products">Produkter</Nav.Link>
                <NavDropdown title="Projekter" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/projectA">
                        Projekt A
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">Om Os</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <SignUp/>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default CollapsibleExample;