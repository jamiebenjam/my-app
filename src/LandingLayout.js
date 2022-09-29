import React from 'react';
import Porfolio from './Porfolio';
import Blogs from './Blogs';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingLayout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p className="firstName">Jamie</p>
            <p className="lastName">Benjamin</p>
            <span className="title">software engineer</span>
          </Col>
        </Row>
      </Container>
      <div className="spacer"></div>
      <div className="divider"></div>
    </div>
  );
};

export default LandingLayout;
