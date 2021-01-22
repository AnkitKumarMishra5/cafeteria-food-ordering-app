import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

import { NavLink, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={NavLink} to="/">
        Office-Cafeteria App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" activeClassName="activeLink">
            Home
          </Nav.Link>
          <Nav.Link>
            <NavHashLink to="/#menu">Menu</NavHashLink>
          </Nav.Link>
          {/* <NavLink href="#menu">Menu</NavLink>
          <NavLink href="#order">Order</NavLink> */}
        </Nav>
        <Nav>
          {/* <NavLink href="#profile">Hi, User</NavLink>
          <NavLink href="#logout">
            Logout
          </NavLink> */}
          <Nav.Link as={NavLink} to="/form" activeClassName="activeLink">
            New User? Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavbarComponent);
