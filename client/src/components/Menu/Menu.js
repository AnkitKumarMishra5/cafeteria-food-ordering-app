import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import "./Menu.css";

import data from "./data.json";

const Menu = () => {
  let [count, setCount] = useState(0);
  let [show, setShow] = useState(false);
  useEffect(() => {
    console.log("show" + show);
    if (count === 0) {
      setShow(false);
    }
  }, [count, show]);

  const IncrementItem = () => {
    setCount(count + 1);
  };
  const DecrementItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const ToggleClick = () => {
    if (count === 0) {
      setCount(count + 1);
    }
    setShow(true);
  };
  return (
    <div className="menuContainer" id="menu">
      <Container className="menu-card-container">
        <Row>
          {data.items.length ? (
            data.items.map((item) => (
                <Col key={item.id} lg={4} md={6} sm={12}>
                  <Card className="menu-card">
                    <Card.Img
                      variant="top"
                      src={item.image}
                    />
                    <Card.Body className="card-body-menu">
                      <Card.Title className="dishName">{item.name}</Card.Title>
                      <Card.Title className="price">Rs {item.price}</Card.Title>
                      <Card.Text className="menu-text">
                        {item.description}
                      </Card.Text>
                      <div className="addToCart">
                        {show && (
                          <Button
                            className="decrement"
                            onClick={() => {
                              DecrementItem();
                            }}
                          >
                            -
                          </Button>
                        )}
                        <Button
                          className="showMenu"
                          onClick={() => {
                            ToggleClick();
                          }}
                        >
                          {" "}
                          {!show && count === 0 ? "ADD" : count}
                        </Button>
                        {show && (
                          <Button
                            className="increment"
                            onClick={() => {
                              IncrementItem();
                            }}
                          >
                            {" "}
                            +
                          </Button>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
            ))
          ) : (
            <Spinner animation="grow" variant="primary" />
          )}
        </Row>
      </Container>
    </div>
  );
};
export default Menu;
