import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Card, CarouselItem } from 'react-bootstrap';
import ecommerce from './ecommerce.png';
import ecom1 from './ecom1.png';
import ecom2 from './ecom2.png';
import ecom3 from './ecom3.png';
import ecom4 from './ecom4.png';
import ecom5 from './ecom5.png';
import ecom6 from './ecom6.png';
import ranch from './ranch.png';
import Bounce from 'react-reveal/Bounce';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HiDownload } from 'react-icons/hi';
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
import resume from './Jamie_Benjamin_Resume.pdf';

const Porfolio = () => {
  return (
    <div>
      <Parallax pages={4}>
        <div className="slow" />

        <ParallaxLayer speed={1}>
          <Container className="pageContainer">
            <Row>
              <Bounce top>
                <div className="pageTitle">Portfolio</div>
              </Bounce>
            </Row>
            <Row>
              <div className="iconDiv">
                <Row>
                  <Col className="iconCol">
                    <Button className="downloadButton">
                      <a href={resume} download className="resumeText">
                        Download my resume <HiDownload />
                      </a>
                    </Button>
                  </Col>
                  <Col className="iconCol">
                    <SiJavascript className="portfolioIcon" />
                    <div className="portfolioIconSpacer"> Javascript</div>

                    <AiOutlineHtml5 className="portfolioIcon" />
                    <div className="portfolioIconSpacer">HTML</div>

                    <SiReact className="portfolioIcon" />
                    <div className="portfolioIconSpacer">React</div>

                    <SiRubyonrails className="portfolioIcon" />
                    <div className="portfolioIconSpacer">Ruby on Rails</div>
                  </Col>
                  <Col className="iconCol">
                    <SiCsswizardry className="portfolioIcon" />
                    <div className="portfolioIconSpacer">CSS</div>

                    <FaGitAlt className="portfolioIcon" />
                    <div className="portfolioIconSpacer">Git</div>

                    <SiPostgresql className="portfolioIcon" />
                    <div className="portfolioIconSpacer">PostgreSQL</div>

                    <VscRuby className="portfolioIcon" />
                    <div className="portfolioIconSpacer">Ruby</div>
                  </Col>
                  <Col className="iconCol">
                    <SiSemanticuireact className="portfolioIcon" />
                    <div className="portfolioIconSpacer">Semantic UI</div>

                    <DiBootstrap className="portfolioIcon" />
                    <div className="portfolioIconSpacer">Bootstrap</div>

                    <DiVisualstudio className="portfolioIcon" />
                    <div className="portfolioIconSpacer">
                      Visual Studio Code
                    </div>

                    <DiGithubBadge className="portfolioIcon" />
                    <div className="portfolioIconSpacer">GitHub</div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col>
                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="pageTitle">Projects</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="spacer"></div>
                <img
                  src={ecommerce}
                  alt="Ecommerce"
                  className="ecomMainImage"
                />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <Container>
            <Row>
              <Col sm={4}>
                <div className="ecomDescriptionDiv">
                  <div className="githubLink">
                    <a
                      href="https://github.com/jamiebenjam/ecommerce-capstone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <DiGithubBadge className="github" /> GitHub
                    </a>
                    <h1 className="projectTitle">Ecommerce Site</h1>
                    <ul>
                      <li className="listTitle">
                        React frontend & Ruby backend
                      </li>
                      <li className="projectTextItem">
                        User-friendly navigation
                      </li>
                      <li className="projectTextItem">Site search</li>
                      <li className="projectTextItem">Local cart storage</li>
                      <li className="projectTextItem">
                        Admin and user functionality
                      </li>
                      <li className="projectTextItem">Shop by category</li>
                      <li className="projectTextItem">Sort by price</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={8}>
                <div className="ecomText">
                  {/* KEEP background image div KEEP */}
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col>
                <img src={ecom2} alt="Ecommerce" className="ecom2" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={ecom3} alt="Ecommerce" />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Porfolio;
