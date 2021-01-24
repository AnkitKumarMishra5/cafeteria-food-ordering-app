import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

import { NavLink, withRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import axios from 'axios';

const NavbarComponent = (props) => {
  const currentUser = props.user;

  const handleClick = (e) =>{
    e.preventDefault();
    axios
      .get(`{process.env.REACT_APP_API_ENDPOINT}/logout`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    props.setSession(!props.session)
    props.history.push('/login');
  }

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
        </Nav>
        <Nav>
          {currentUser === "" ? (
            <>
              <Nav.Link as={NavLink} to="/form" activeClassName="activeLink">
                New User? Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" activeClassName="activeLink">
                Login
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/success" activeClassName="activeLink">
                Hi, {currentUser}
              </Nav.Link>
              <Nav.Link onClick={handleClick} activeClassName="activeLink">
                Logout
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavbarComponent);
