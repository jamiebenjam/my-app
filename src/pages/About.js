import React from 'react';
import me from '../images/me.jpg';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BsArrowDownCircle } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import diver from '../images/dive.png';
import { AiOutlineMail } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { FaMediumM } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { RiCamera3Fill } from 'react-icons/ri';

const About = () => {
  return (
    <div className="aboutDiv">
      {/* <Container className="pageContainer"> */}
      {/* <Parallax pages={2}> */}
      {/* <div className="slow" /> */}

      {/* <ParallaxLayer speed={1}> */}
      <div className="scrollAbout">
        <TypeAnimation
          sequence={[
            'HHHi!', // Types 'One'
            2000, // Waits 1s
            "I'm JJJamie.  ", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            // 'Fullstack Software Engineer', // Types 'Three' without deleting 'Two'
            // 1000,
            // '+ Photographer',
          ]}
          wrapper="span"
          speed={60}
          cursor={true}
          repeat={3}
          style={{ fontSize: '2em' }}
        />
        <Image className="me" src={me} alt="jamie" />
        <div className="spacer"></div>
      </div>
      {/* </ParallaxLayer> */}

      {/* <ParallaxLayer sticky={{ start: 0.2, end: 0.8 }}> */}
      <div className="aboutMeDiv">
        <p className="aboutMe">A bit about me.</p>
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
        <BsArrowDownCircle className="arrow" />
      </div>
      {/* </ParallaxLayer> */}

      {/* <ParallaxLayer sticky={{ start: 0.4, end: 4 }}> */}
      <img src={diver} alt="diver" className="diver" />
      {/* </ParallaxLayer> */}

      {/* // <ParallaxLayer offset={1} speed={0.5}> */}
      <div className="bioDiv">
        <p className="bio">
          I am a photographer turned software engineer with a demonstrated
          history of public relations and communications. I'm a recent graduate
          of the immersive software engineering program at Flatiron School. In a
          short 15 weeks, I’ve gained a firm grasp on JavaScript, React, Ruby,
          and Ruby on Rails and look forward to applying creative skillset in a
          new direction.
        </p>
        <img src={diver} alt="diver" className="diverImage" />
      </div>
      {/* </ParallaxLayer> */}
      {/* </Parallax> */}
      {/* </Container> */}
      <div className="connectDiv">
        <p className="connect">Let's Connect</p>
        <div className="aboutIconDiv">
          <Button
            variant="dark"
            href="mailto:bennythedev@gmail.com"
            alt="email"
            className="aboutIconButton"
          >
            <AiOutlineMail className="aboutIcon" />
          </Button>
          <span className="aboutIconSpacer"></span>
          <Button
            variant="dark"
            href="https://www.linkedin.com/in/jamie-benjamin"
            target="_blank"
            className="aboutIconButton"
          >
            <BsLinkedin className="aboutIcon" />
          </Button>
          <span className="aboutIconSpacer"></span>

          <Button
            variant="dark"
            href="https://github.com/jamiebenjam"
            target="_blank"
            className="aboutIconButton"
          >
            <DiGithubBadge className="aboutIcon" />
          </Button>
          <span className="aboutIconSpacer"></span>

          <Button
            variant="dark"
            href="https://medium.com/@bennythedev"
            target="_blank"
            className="aboutIconButton"
          >
            <FaMediumM className="aboutIcon" />
          </Button>
          <span className="aboutIconSpacer"></span>

          <Button
            variant="dark"
            href="https://www.instagram.com/jamiebenjam/"
            target="_blank"
            className="aboutIconButton"
          >
            <IoLogoInstagram className="aboutIcon" />
          </Button>
          <span className="aboutIconSpacer"></span>

          <Button
            variant="dark"
            href="https://www.jamie-benjamin.com/"
            target="_blank"
            className="aboutIconButton"
          >
            <RiCamera3Fill className="aboutIcon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
