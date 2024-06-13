import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
   <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;