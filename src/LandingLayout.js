import React from 'react';
import Porfolio from './Porfolio';
import Blogs from './Blogs';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';
import Bounce from 'react-reveal/Bounce';

const LandingLayout = () => {
  return (
    <div>
      <div></div>
      <Container>
        <Row>
          <Col>
            <div>
              <Bounce top>
                <p className="firstName">Jamie</p>
                <p className="lastName">Benjamin</p>
              </Bounce>
            </div>
            <span className="title">
              <TypeAnimation
                sequence={[
                  // 'Jamie Benjamin', // Types 'One'
                  1000, // Waits 1s
                  'Software Engineer', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Fullstack Software Engineer', // Types 'Three' without deleting 'Two'
                  1000,
                  '+ Photographer',
                ]}
                wrapper="span"
                cursor={true}
                repeat={3}
                style={{ fontSize: '2em' }}
              />
              {/* software engineer */}
            </span>
          </Col>
        </Row>
      </Container>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="divider"></div>
      {/* <div className="divider"></div> */}
    </div>
  );
};

export default LandingLayout;
