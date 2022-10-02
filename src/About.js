import React from 'react';
import { Container } from 'react-bootstrap';
import me from './me.jpg';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BsArrowDownCircle } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import diver from './dive.png';

const About = () => {
  return (
    <div>
      {/* <Container className="pageContainer"> */}
      <Parallax pages={3} className="aboutDiv">
        <div className="slow" />

        <ParallaxLayer speed={1}>
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
            {/* <p>A bit about me.</p>
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" /> */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.2, end: 0.35 }}>
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
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.4, end: 3 }}>
          <img src={diver} alt="diver" className="diver" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.75} speed={0.5}>
          <div className="bioDiv">
            <p className="bio">
              I'm a recent graduate of the immersive software engineering
              program at Flatiron School. I’m originally from Ohio with a BA in
              Communications but spent the past 3 years building a successful
              portrait photography business in Chicago. I’ve loved being in the
              arts but am excited to apply my skill set in different ways like
              creative problem solving as a software engineer. In a short 15
              weeks, I’ve gained a firm grasp on JavaScript, React, Ruby, and
              Ruby on Rails with functional applications to demonstrate this
              knowledge. I’m looking to be in a position where I can contribute
              to helping communities or individuals’ lives more convenient.
            </p>
          </div>
        </ParallaxLayer>
        {/* <div>
          <Button className="downloadButton">
            <a
              href="https://www.linkedin.com/in/jamie-benjamin/"
              target="_blank"
              rel="noreferrer"
              className="resumeText"
            >
              LinkedIn
            </a>
          </Button>
        </div> */}
      </Parallax>
      {/* </Container> */}
    </div>
  );
};

export default About;
