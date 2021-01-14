import { Navbar, Nav } from "react-bootstrap";
import './Navbar.css'

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">Office-Cafeteria App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#menu">Menu</Nav.Link>
          <Nav.Link href="#order">Order</Nav.Link>
          <Nav.Link href="#register">New User? Register</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#profile">Hi, User</Nav.Link>
          <Nav.Link href="#logout">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
