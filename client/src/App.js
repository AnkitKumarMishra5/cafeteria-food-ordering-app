import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import NavbarComponent from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import WelcomeBanner from "./components/WelcomeBanner/WelcomeBanner";

import './App.css'

const App = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
        <WelcomeBanner />
        <Form />
      </Container>
    </>
  );
};

export default App;
