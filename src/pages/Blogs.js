import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
// import Bounce from 'react-reveal/Bounce';

const Blogs = () => {
  function handleBlog() {
    return <a href="www.jamie-benjamin.com"> </a>;
  }
  return (
    <div>
      <NavBar />
      <Container className="pageContainer">
        <div className="pageTitle">Blogs</div>
        <Col md={6}>
          <Row className="blog-row">
            <Button
              variant="outline-dark"
              href="https://medium.com/codex/the-dangers-and-differences-of-javascript-innerhtml-innertext-and-textcontent-d82711e873c8"
              target="_blank"
            >
              <Card
                className="blogText"
                tag="a"
                onClick={handleBlog}
                style={{ cursor: 'pointer' }}
              >
                <Card.Img
                  className="blogImage"
                  src="https://miro.medium.com/max/640/1*_TF41GE3B9jE_O9qKeqzdw.jpeg"
                  alt="Blog1"
                />
                <Card.Body>
                  <Card.Title className="blogTitle">
                    The Dangers and Differences of JavaScript .innerHTML,
                    .innerText, and .textContent
                  </Card.Title>
                  <Card.Text>
                    In JavaScript, there are a few ways to edit the contents of
                    an element but how do you know which one to choose? Let’s
                    learn a little more about...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Button>

            <Button
              variant="outline-dark"
              href="https://medium.com/@bennythedev/type-of-css-inline-75fee11c0a02"
              target="_blank"
            >
              <Card className="blogText">
                <Card.Img
                  className="blogImage"
                  src="https://images.unsplash.com/photo-1629905679177-4c4e2623654f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1218&q=80"
                  alt="Blog1"
                />
                <Card.Body>
                  <Card.Title className="blogTitle">
                    Type of CSS — Inline, Internal, and External
                  </Card.Title>
                  <Card.Text>
                    Early on in my journey of becoming a software engineer, I
                    realized that I took a liking to CSS (Cascading Style
                    Sheet), a language used to style HTML elements. What’s
                    better than making your vision come to life vi...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Button>
          </Row>

          <Row className="blog-row">
            <Button
              variant="outline-dark"
              href="https://medium.com/@bennythedev/how-to-publish-your-react-app-on-github-pages-2b40f2c39c29"
              target="_blank"
            >
              <Card className="blogText">
                <Card.Img
                  className="blogImage"
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
                  alt="Blog1"
                />
                <Card.Body>
                  <Card.Title className="blogTitle">
                    How to Publish Your React App on GitHub Pages
                  </Card.Title>
                  <Card.Text>
                    Looking to share your project with friends, family, and let
                    the world see your work? Here’s a simple guide to deploying
                    your React App to Github Pages. Once you have created your
                    repository on Github and have set u...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Button>

            <Button
              variant="outline-dark"
              href="https://medium.com/@bennythedev/vs-code-extensions-to-make-your-life-easier-as-a-software-engineer-b7e58f5e4ead"
              target="_blank"
            >
              <Card className="blogText">
                <Card.Img
                  className="blogImage"
                  src="https://miro.medium.com/max/640/1*9ExD1hxn07GbHl_cWMMcGQ.jpeg"
                  alt="Blog1"
                />
                <Card.Body>
                  <Card.Title className="blogTitle">
                    VS Code Extensions to Make Your Life Easier as a Software
                    Engineer
                  </Card.Title>
                  <Card.Text>
                    In starting my journey as a software engineer, I found
                    myself watching more experienced engineers working in a
                    Visual Studio Code editor...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Button>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Blogs;
