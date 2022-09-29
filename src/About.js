import React from 'react';
import { Container } from 'react-bootstrap';
import me from './me.jpg';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div>
      <Container className="pageContainer">
        <Image className="me" src={me} alt="jamie" />
      </Container>
    </div>
  );
};

export default About;
