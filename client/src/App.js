import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";

import NavbarComponent from "./components/Navbar/Navbar";
import WelcomeBanner from "./components/WelcomeBanner/WelcomeBanner";

import Form from "./components/Form/Form";
import Preview from "./components/Preview";

const App = () => {
  return (
    <>
      <Container fluid>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={WelcomeBanner} />
          <Route path="/form" component={Form} />
          <Route path="/preview" component={Preview} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
