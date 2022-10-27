import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(
    sessionStorage.getItem("email") || false
  );

  const handleClick = () => {
    setIsOpen(false);
    sessionStorage.clear();
  };
  return (
    <div>
      <Navbar bg="success" variant="dark">
        {isOpen ? (
          <Container>
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/" onClick={handleClick}>
                Logout
              </NavLink>
            </Nav>
          </Container>
        ) : (
          <Container>
            <Navbar.Brand href="">Recipe</Navbar.Brand>{" "}
          </Container>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
