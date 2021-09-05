import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { googleLogin } from "../../firebase/auth/googleAuth";
import { accessToken } from "../../utils/constants";
import IfLoggedIn from "../IfLoggedIn/IfLoggedIn";
import IfGuest from "../IfGuest/IfGuest";
import "./Header.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  const login = () => {
    if (!isLoggedIn) googleLogin();
    setIsLoggedIn(true);
    history.push("/");
  };

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear();
    history.push("/test");
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
