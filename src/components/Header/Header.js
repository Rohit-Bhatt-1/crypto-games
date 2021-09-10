import React from "react";
import { useHistory } from "react-router";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import IfLoggedIn from "../IfLoggedIn/IfLoggedIn";
import IfGuest from "../IfGuest/IfGuest";
import { useDispatch } from "react-redux";
import "./Header.css";
import {
  authActionCreator,
  logout,
} from "../../redux/actionCreator/authActionCreator/authActionCreator";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = () => {
    (async () => {
      dispatch(await authActionCreator());
      history.push("/test");
    })();
  };

  const dispatchLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <NavLink to="/" className="navbar-brand hover-overlay ps-2">
        Bear & Bull
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <IfLoggedIn>
            <Nav.Link className="nav-link" onClick={dispatchLogout}>
              Logout
            </Nav.Link>
          </IfLoggedIn>
          <IfGuest>
            <Nav.Link className="nav-link" onClick={login}>
              Login with{" "}
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                alt="Google"
                className="logo"
              />
            </Nav.Link>
          </IfGuest>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
