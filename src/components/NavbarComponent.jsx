import React, { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

function NavbarComponents() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-dark shadow-lg">
      <Navbar data-bs-theme="dark" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="gap-5">
            <NavbarBrand href="https://www.linkedin.com/in/guswandi">Guswandi Shops</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Homes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/andigagaga">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Admin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponents;
