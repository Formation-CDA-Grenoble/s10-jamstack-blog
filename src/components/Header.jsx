import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SearchForm } from '.';
import { Link } from 'react-router-dom';

const Header = () =>
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
        </Nav>
        <SearchForm />
      </Navbar.Collapse>
    </Navbar>
  </header>
;

export default Header;
