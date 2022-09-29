import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CarouselItem } from 'react-bootstrap';
import ecommerce from './ecommerce.png';
import ecom1 from './ecom1.png';
import ecom2 from './ecom2.png';
import ecom3 from './ecom3.png';
import ecom4 from './ecom4.png';
import ecom5 from './ecom5.png';
import ecom6 from './ecom6.png';
import ranch from './ranch.png';

const Porfolio = () => {
  return (
    <div>
      <Container fluid>
        {/* <Row>
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={ecom1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={ecom2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                src={ecom3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row> */}
        <Row>
          <Col className="portfolio">P o r t f o l i o</Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecommerce}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom1}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom2}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom3}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom4}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom5}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom6}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
            </Carousel>
          </Col>

          <Col>
            <p>hello this is my project</p>
            {/* <Card>
              <Card.Img
                className="portfolioImage"
                src={ranch}
                alt="Ecommerce Capstone"
              />
            </Card> */}
          </Col>
        </Row>

        <div className="spacer"></div>

        <Row>
          <Col>
            <p>Coddee Farm, logic based game, React</p>
            {/* <Card>
              <Card.Img
                className="portfolioImage"
                src={ranch}
                alt="Ecommerce Capstone"
              />
            </Card> */}
          </Col>
          <Col>
            <Carousel>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ranch}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom1}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom2}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom3}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom4}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom5}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <Card.Img
                    className="portfolioImage"
                    src={ecom6}
                    alt="Ecommerce Capstone"
                  />
                </Card>
              </CarouselItem>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Porfolio;
