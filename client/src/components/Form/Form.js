import { useState } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";

import "./Form.css";

const FormComponent = () => {
  const [newUser, setNewUser] = useState({
    fullName: "",
    orgName: "",
    employeeID: "",
    email: "",
    mobile: "",
    password: "",
  });
  return (
    <Row className="justify-content-center" id="register">
      <Col md={6} xs={12} className="form-section">
        <h2>Register Here</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={newUser["fullName"]}
                onInput={(e) => setNewUser({ fullName: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                required
                name="orgName"
                type="text"
                placeholder="Organization Name"
                value={newUser["orgName"]}
                onInput={(e) => setNewUser({ fullName: e.target.value })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                required
                name="employeeID"
                type="text"
                placeholder="Emp. ID"
                value={newUser["employeeID"]}
                onInput={(e) => setNewUser({ fullName: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  aria-describedby="inputGroupPrepend"
                  required
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={newUser["email"]}
                  onInput={(e) => setNewUser({ fullName: e.target.value })}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                required
                name="mobile"
                type="text"
                placeholder="Mobile"
                value={newUser["mobile"]}
                onInput={(e) => setNewUser({ fullName: e.target.value })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>ID Card</Form.Label>
              <Form.File id="custom-file" label="Upload ID Card" custom />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                type="password"
                placeholder="Password"
                value={newUser["password"]}
                onInput={(e) => setNewUser({ fullName: e.target.value })}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={newUser["confirmPassword"]}
                onInput={(e) => setNewUser({ fullName: e.target.value })}
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit" className="submit-btn">
            Submit Details
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default FormComponent;
