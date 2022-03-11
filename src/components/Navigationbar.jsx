import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { scroller } from "react-scroll";

export default function Navigationbar() {
  return (
  <Navbar bg="light" expand="lg" sticky='top'>
  <Container>
    <Navbar.Brand href="#home">Damian Liminowicz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"> 
      {// ^^^ aby bylo po lewej zamiast ms dac ml
      }
        <Nav.Link onClick={() => scroller.scrollTo('home', {offset: -56})}>
          Home
        </Nav.Link>
        <Nav.Link onClick={() => scroller.scrollTo('about_me', {offset: -56})}>
          About me
        </Nav.Link>
        <Nav.Link onClick={() => scroller.scrollTo('skills', {offset: -56})}>
          Skills
        </Nav.Link>
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item >Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Item >Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={() => scroller.scrollTo('contact_me', {offset: -56})}>
          Contact me
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
