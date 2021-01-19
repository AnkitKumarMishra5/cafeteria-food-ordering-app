import { useEffect, useRef } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

import bsCustomFileInput from 'bs-custom-file-input';

import "./Form.css";

const FormComponent = (props) => {
  const idCard = useRef(null);
  const newUser = props.newUser;
  const setNewUser = props.setNewUser;

  useEffect(() => {
    bsCustomFileInput.init();
    console.log(newUser);
  },[newUser])

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(newUser)
    props.history.push('/preview');
  }

  return (
    <Row className="justify-content-center" id="register">
      <Col md={6} xs={12} className="form-section">
        <h2>Register Here [1/3]</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={newUser.fullName}
                onInput={(e) => setNewUser({...newUser, fullName: e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                required
                name="orgName"
                type="text"
                placeholder="Organization Name"
                value={newUser.orgName}
                onInput={(e) => setNewUser({...newUser, orgName: e.target.value})}
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
                value={newUser.employeeID}
                onInput={(e) => setNewUser({...newUser, employeeID: e.target.value})}
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
                  value={newUser.email}
                  onInput={(e) => setNewUser({...newUser, email: e.target.value})}
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
                value={newUser.mobile}
                onInput={(e) => setNewUser({...newUser, mobile: e.target.value})}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>ID Card</Form.Label>
              <Form.File
                label="Upload ID Card"
                accept=".jpeg,.png"
                custom
                ref={idCard}
                onInput={() => setNewUser({...newUser, idCard: URL.createObjectURL(idCard.current.files[0])})}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                type="password"
                placeholder="Password"
                value={newUser.password}
                onInput={(e) => setNewUser({...newUser, password: e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
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

export default withRouter(FormComponent);
