import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation=()=> {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{display:'inline-block'}}><h1 style={{color:'red',display:'inline-block'}}>7&nbsp;</h1><h1 style={{color:'green',display:'inline-block'}}>ELEVEN&nbsp;</h1><h1 style={{color:'orange',display:'inline-block'}}>GSC&nbsp;</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;