import { useState } from "react";
import { Row, Col, Jumbotron, Carousel } from "react-bootstrap";

import './WelcomeBanner.css'

const WelcomeBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Jumbotron>
      <Row class="bannerRow">
        <Col md="4" xs="12">
          <h1>Welcome Employees!</h1>
          <p>
            Bringing Office Cafeteria ONLINE! <br/>
            Register once and order whenever you wish! Delivery at your table!
          </p>
        </Col>
        <Col md="8" xs="12">
          <Carousel className="welcomeCarousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100-img .w-100"
                src="https://images.unsplash.com/photo-1565262353533-b183c89a4f33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100-img .w-100"
                src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100-img .w-100"
                src="https://images.unsplash.com/photo-1564758866811-4780aa0a1f49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default WelcomeBanner;
