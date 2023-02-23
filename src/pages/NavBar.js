import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-end navMenu">
        <Button variant="outline-info" className="navButton">
          <Nav.Link href="/" className="navTitles">
            home
          </Nav.Link>
        </Button>
        <Button variant="outline-info">
          <Nav.Link href="/portfolio" className="navTitles">
            portfolio
          </Nav.Link>
        </Button>
        <Button variant="outline-info">
          <Nav.Link href="/blogs" className="navTitles">
            blogs
          </Nav.Link>
        </Button>
        <Button variant="outline-info">
          <Nav.Link href="/about" className="navTitles">
            about
          </Nav.Link>
        </Button>
      </Nav>
    </div>
  );
};

export default NavBar;
