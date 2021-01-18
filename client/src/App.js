// import { useState} from "react";
import React, { Suspense, lazy, useState } from "react";

import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";

import Loading from './components/Loading'

const NavbarComponent = lazy(() => import("./components/Navbar/Navbar"));
const WelcomeBanner = lazy(() =>
  import("./components/WelcomeBanner/WelcomeBanner")
);
const Form = lazy(() => import("./components/Form/Form"));
const Preview = lazy(() => import("./components/Preview/Preview"));
const Menu = lazy(() => import("./components/Menu/Menu"));
const Login = lazy(() => import("./components/Login/Login"));
const Success = lazy(() => import("./components/Success/Success"));

const App = () => {
  const [newUser, setNewUser] = useState({
    fullName: "",
    orgName: "",
    employeeID: "",
    email: "",
    mobile: "",
    idCard: "",
    password: "",
  });

  return (
    <>
      <Container fluid>
        <Suspense
          fallback={
            <Loading />
          }
        >
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={WelcomeBanner} />
            <Route
              path="/form"
              render={() => <Form newUser={newUser} setNewUser={setNewUser} />}
            />
            <Route
              path="/preview"
              render={() => <Preview newUser={newUser} />}
            />
            <Route path="/login" component={Login} />
            <Route path="/menu" component={Menu} />
            <Route
              path="/success"
              render={() => <Success newUser={newUser} />}
            />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
