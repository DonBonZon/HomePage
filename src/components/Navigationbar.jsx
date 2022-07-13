import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { scroller } from "react-scroll";

export default function Navigationbar() {
  const offset = -56;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Damian Liminowicz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => scroller.scrollTo("home", { offset: offset })}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scroller.scrollTo("skills", { offset: offset })}
            >
              Skills
            </Nav.Link>
            <NavDropdown title="Projects">
              <NavDropdown.Item>To be</NavDropdown.Item>
              <NavDropdown.Item>Done or added</NavDropdown.Item>
              <NavDropdown.Item>Later</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo("contact_me", { offset: offset })
              }
            >
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
