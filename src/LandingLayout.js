import React from 'react';
import Porfolio from './Porfolio';
import Blogs from './Blogs';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';
import Bounce from 'react-reveal/Bounce';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRubyonrails } from 'react-icons/si';
import { VscRuby } from 'react-icons/vsc';
import { SiCsswizardry } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiSemanticuireact } from 'react-icons/si';
import { DiBootstrap } from 'react-icons/di';
import { DiVisualstudio } from 'react-icons/di';
import { DiGithubBadge } from 'react-icons/di';

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
                repeat={Infinity}
                style={{ fontSize: '2em' }}
              />
              {/* software engineer */}
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="icons">
              <SiJavascript className="icon" />
              <div className="iconSpacer"></div>

              <AiOutlineHtml5 className="icon" />
              <div className="iconSpacer"></div>

              <SiReact className="icon" />
              <div className="iconSpacer"></div>

              <SiRubyonrails className="icon" />
              <div className="iconSpacer"></div>

              <VscRuby className="icon" />
              <div className="iconSpacer"></div>

              <SiCsswizardry className="icon" />
              <div className="iconSpacer"></div>

              <SiPostgresql className="icon" />
              <div className="iconSpacer"></div>

              <FaGitAlt className="icon" />
              <div className="iconSpacer"></div>

              <SiSemanticuireact className="icon" />
              <div className="iconSpacer"></div>

              <DiBootstrap className="icon" />
              <div className="iconSpacer"></div>

              <DiVisualstudio className="icon" />
              <div className="iconSpacer"></div>

              <DiGithubBadge className="icon" />
              <div className="iconSpacer"></div>
            </div>
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
