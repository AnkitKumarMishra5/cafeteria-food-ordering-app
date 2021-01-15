import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';

const PreviewForm = () => {
return(
    <>
    <Container className="mainContainer">
        <Row>
            <Col lg={4} className="leftContainer">
                <h1>Left Conatiner</h1>
            </Col>
            <Col lg={8} className="rightContainer">
            <Row className="header">
                <Col lg={12}>
                <h1>Header</h1>
                </Col>
            </Row>
            <div className="content">
            <Form>
                <Row className="formInput1">
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
            <Form>
                <Row className="formInput2">
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
            <Form>
                <Row className="formInput3">
                    <Col>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
            </div>
            <Row className="footer">
                <Col lg={6}>
                <Button variant="outline-warning" size="lg">Edit</Button>
                </Col>
                <Col lg={6}>
                <Button variant="outline-success"  size="lg">Submit</Button>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
    </>
)
}
export default PreviewForm ;