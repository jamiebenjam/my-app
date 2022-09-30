import React from 'react';
import { Container } from 'react-bootstrap';
import me from './me.jpg';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { BsArrowDownCircle } from 'react-icons/bs';

const About = () => {
  return (
    <div>
      <Container className="pageContainer">
        <Parallax pages={4}>
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
              <p>A bit about me.</p>
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
              <BsArrowDownCircle className="arrow" />
            </div>
          </ParallaxLayer>
          {/* <ParallaxLayer offset={1} speed={0.5}>
            <p className="bio">
              I'm a recent graduate of the immersive software engineering
              program at Flatiron School.
            </p>
          </ParallaxLayer> */}
          <ParallaxLayer offset={1} speed={0.5}>
            <div className="bioDiv">
              <p className="bio">
                I'm a recent graduate of the immersive software engineering
                program at Flatiron School.
              </p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </Container>
    </div>
  );
};

export default About;
