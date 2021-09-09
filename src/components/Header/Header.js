import React, { useState } from "react";
import { useHistory } from "react-router";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import IfLoggedIn from "../IfLoggedIn/IfLoggedIn";
import IfGuest from "../IfGuest/IfGuest";
import { useDispatch } from "react-redux";
import "./Header.css";
import authActionCreator from "../../redux/actionCreator/authActionCreator/authActionCreator";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    if (!isLoggedIn) {
      (async () => {
        dispatch(await authActionCreator());
        setIsLoggedIn(true);
        // history.push("/test");
      })();
    }
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavLink to="/" className="navbar-brand hover-overlay ps-2">
        Bear & Bull
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
          <IfLoggedIn>
            <Nav.Link className="nav-link" onClick={logout}>
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
