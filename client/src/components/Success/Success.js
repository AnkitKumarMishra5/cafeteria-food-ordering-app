import React from 'react';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';
import './Success.css';

const Success = () => {
  return (
    <>
    <Row className="justify-content-center" id="main-success-container">
    <Col md={4} xs={12} className="main-success-div">
       <Table responsive="xl" className="new-table">
            <tbody>
            <tr>
                <th>Registration ID: </th>
                <td className="values"> 11707555</td>
              </tr>
              <tr>
                <th>Name</th>
                <td className="values"> Saaru Bhatia</td>
              </tr>
              <tr>
                <th>Organization</th>
                <td className="values">Web Geeks</td>
              </tr>
              <tr>
                <th>Employee ID</th>
                <td className="values"> 11707969</td>
              </tr>
              <tr>
                <th>Email</th>
                <td className="values email">saar@gmail.com</td>
              </tr>
              <tr>
                <th>Mobile No.:</th>
                <td className="values">8289019696</td>
              </tr>
            </tbody>
          </Table>
       </Col>
     </Row>
     </>
  );
};

export default Success;
