import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
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
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        Engenheiro Youtuber
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/catalogo">
              Catálogo
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/galeria_fotos">
              Galeria fotos
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/contato">
              Contato
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/adm">
              Adm
            </NavLink>
          </NavItem>

          <NavItem></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Header;
