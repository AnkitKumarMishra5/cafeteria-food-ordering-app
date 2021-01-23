import React from 'react';
import {Row, Col, Table } from 'react-bootstrap';
import './Success.css';

const Success = ({user}) => {
  return (
    <>
    <Row className="justify-content-center" id="main-success-container">
    <Col md={4} xs={12} className="main-success-div">
    <h2>Welcome {user.username} !</h2>
       <Table responsive="xl" className="new-table">
            <tbody>
            <tr>
                <th>Registration ID: </th>
                <td className="values">{user.regId}</td>
              </tr>
              <tr>
                <th>Name: </th>
                <td className="values">{user.username}</td>
              </tr>
              <tr>
                <th>Organization: </th>
                <td className="values">{user.orgName}</td>
              </tr>
              <tr>
                <th>Employee ID: </th>
                <td className="values">{user.employeeId}</td>
              </tr>
              <tr>
                <th>Email: </th>
                <td className="values email">{user.email}</td>
              </tr>
              <tr>
                <th>Mobile No.: </th>
                <td className="values">{user.mobile}</td>
              </tr>
            </tbody>
          </Table>
       </Col>
     </Row>
     </>
  );
};

export default Success;
