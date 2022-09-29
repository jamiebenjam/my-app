import React from 'react';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-end">
        <Nav.Link href="/" className="navTitles">
          home
        </Nav.Link>
        <Nav.Link href="/portfolio" className="navTitles">
          portfolio
        </Nav.Link>
        <Nav.Link href="/blogs" className="navTitles">
          blogs
        </Nav.Link>
        <Nav.Link href="/about" className="navTitles">
          about
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavBar;
