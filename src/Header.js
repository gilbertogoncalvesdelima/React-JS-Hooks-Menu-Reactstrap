import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";
import { Link } from "react-router-dom";
// Collapse, reduzir o menu para sanduiche, automaticamente
// Nav, navengação em si
// NavbarToggler, Ligar o menu

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    
    <Navbar sticky="top" color="dark" dark expand="md" height ="80px">
     <NavbarBrand tag={Link} to="/">
    
      <img style={{ height: "30%", width: "30%"}}
        src="https://res.cloudinary.com/drimg72d1/image/upload/v1637895493/logo.jpg"
        className="img-fluid"
        alt="..."
      />
    
     
      
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>

          <NavItem>
            <NavLink tag={Link} to="/home">
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/nossassolucoes">
              Nossas Soluções
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/conhecajussi">
              Conheça a Jussi
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/login">
              Login
            </NavLink>
          </NavItem>

          <NavItem></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Header;
