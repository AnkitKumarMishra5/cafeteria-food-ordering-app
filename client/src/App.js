import { useState} from "react";

import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";

import NavbarComponent from "./components/Navbar/Navbar";
import WelcomeBanner from "./components/WelcomeBanner/WelcomeBanner";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';

const App = () => {
  const [newUser, setNewUser] = useState({
    fullName: "",
    orgName: "",
    employeeID: "",
    email: "",
    mobile: "",
    idCard: "",
    password: ""
  });

  return (
    <>
      <Container fluid>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={WelcomeBanner} />
          <Route path="/form" render={() => (<Form newUser={newUser} setNewUser={setNewUser} />)} />
          <Route path="/preview" render={() => (<Preview newUser={newUser} />)} />
          <Route path="/login" component={Login} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
