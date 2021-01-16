import { Navbar, Nav } from "react-bootstrap";

import './Navbar.css'

import {NavLink, withRouter} from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={NavLink} to="/">Office-Cafeteria App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          {/* <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#order">Order</NavLink> */}
          <Nav.Link as={NavLink} to='/form'>New User? Register</Nav.Link>
        </Nav>
        <Nav>
          {/* <NavLink href="#profile">Hi, User</NavLink>
          <NavLink href="#logout">
            Logout
          </NavLink> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavbarComponent);
