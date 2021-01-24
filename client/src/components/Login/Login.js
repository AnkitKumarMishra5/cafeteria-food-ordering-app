import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import "./Login.css";
const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [alert, setAlert] = useState(false)

  const handleAlert = () => {
    setTimeout(
        () => setAlert(false), 
        5000
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/login`, user)
      .then((res) => {
          props.setNewUser(res.data);
          props.history.push('/');
      })
      .catch((error) => {
        setAlert(true);
        handleAlert();
        console.log(error);
      });
  };

  return (
    <>
      <Container className="mainContainer">
        <Row>
          <Col lg={6} className="leftContainer">
            <Carousel>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100 loginImg"
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100 loginImg"
                  src="https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <img
                  className="d-block w-100 loginImg"
                  src="https://images.unsplash.com/photo-1508737804141-4c3b688e2546?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
                  alt="Third slide"
                  style={{ overflow: "scroll" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={6} className="rightContainer">
            <Row className="header">
              <Col lg={12}>
                <h1 className="loginHeading">Login</h1>
              </Col>
            </Row>
            <div className="content">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </Form.Group>
                {alert &&
                <Form.Text className="text-muted">
                  Invalid Username/Password! Please try again!
                </Form.Text>
                }
                <Button className="loginButton" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default withRouter(Login);
