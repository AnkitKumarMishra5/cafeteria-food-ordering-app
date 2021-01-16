import React, {useState} from 'react';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import './Login.css';
const Login = () => {
    let[email, setEmail]= useState('');
    let[emailError, setEmailError]= useState(false);

    const validate = (text)=>{
        let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (emailRegex.test(text)) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
        console.log(text);
        setEmail(text);
    }
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
                                    style={{overflow: 'scroll'}}
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
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email"
                                    value={email} 
                                    onChange={(text)=>{validate(text)}} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className="loginButton" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

}
export default Login;
