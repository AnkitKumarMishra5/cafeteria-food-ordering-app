import {
  Row,
  Col,
  Card,
  Table,
  Button,
} from "react-bootstrap";

import {Link, withRouter} from 'react-router-dom';

import "./Preview.css";

const Preview = ({ newUser }) => {
  return (
    <Row className="justify-content-center" id="preview">
      <Col md={4} xs={12} className="preview-section">
        <h2>Preview Registration Details [2/3]</h2>
        <Card className="preview-card">
          <Card.Img
            variant="top"
            src="https://www.fake-id.com/uploads/product/buy-fake-photo-id-front.jpg"
          />
          <Table responsive="xl">
            <tbody>
              <tr>
                <td>Name</td>
                <td className="values">Ankit Kumar</td>
              </tr>
              <tr>
                <td>Organization</td>
                <td className="values">Web Geeks Mangalore</td>
              </tr>
              <tr>
                <td>Employee ID</td>
                <td className="values">110098788</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="values email">ankitkumarmishra.campk12@gmail.com</td>
              </tr>
              <tr>
                <td>Mobile No.:</td>
                <td className="values">9879879876</td>
              </tr>
            </tbody>
          </Table>

          <Card.Footer>
            <Card.Link as={Link} to="/form">
              <Button variant="danger">Edit</Button>
            </Card.Link>
            <Card.Link as={Link} to="/success">
              <Button variant="success">Proceed</Button>
            </Card.Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Preview);
