import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ecommerce from '../images/ecommerce.png';
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
import resume from '../files/Jamie Benjamin SE Resume.pdf';

const PortfolioParallax1 = () => {
  return (
    <div>
      <Container className="pageContainer">
        <Row>
          <div className="pageTitle">Portfolio</div>
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

                <SiRubyonrails className="portfolioIcon" />
                <div className="portfolioIconSpacer">Ruby on Rails</div>

                <AiOutlineHtml5 className="portfolioIcon" />
                <div className="portfolioIconSpacer">HTML</div>

                <DiBootstrap className="portfolioIcon" />
                <div className="portfolioIconSpacer">Bootstrap</div>
              </Col>

              <Col className="iconCol">
                <SiReact className="portfolioIcon" />
                <div className="portfolioIconSpacer">React</div>

                <SiCsswizardry className="portfolioIcon" />
                <div className="portfolioIconSpacer">CSS</div>

                <SiPostgresql className="portfolioIcon" />
                <div className="portfolioIconSpacer">PostgreSQL</div>

                <SiSemanticuireact className="portfolioIcon" />
                <div className="portfolioIconSpacer">Semantic UI</div>
              </Col>

              <Col className="iconCol">
                <VscRuby className="portfolioIcon" />
                <div className="portfolioIconSpacer">Ruby</div>

                <FaGitAlt className="portfolioIcon" />
                <div className="portfolioIconSpacer">Git</div>

                <DiVisualstudio className="portfolioIcon" />
                <div className="portfolioIconSpacer">Visual Studio Code</div>

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
            <img src={ecommerce} alt="Ecommerce" className="ecomMainImage" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioParallax1;
