import { Link } from "react-router-dom";
import NavbarStyle from "./Navbar.style";
import Nav, { Logo, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>
        <i>Kerim -- </i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => !isOpen}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
