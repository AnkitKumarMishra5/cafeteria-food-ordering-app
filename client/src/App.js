// import { useState} from "react";
import React, { Suspense, lazy, useState } from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import "./App.css";

import axios from "axios";

import Loading from "./components/Loading";

const NavbarComponent = lazy(() => import("./components/Navbar/Navbar"));
const WelcomeBanner = lazy(() =>
  import("./components/WelcomeBanner/WelcomeBanner")
);
const Form = lazy(() => import("./components/Form/Form"));
const Preview = lazy(() => import("./components/Preview/Preview"));
const Menu = lazy(() => import("./components/Menu/Menu"));
const Login = lazy(() => import("./components/Login/Login"));
const Success = lazy(() => import("./components/Success/Success"));
const Cart = lazy(() => import("./components/Cart/Cart"));

const App = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    orgName: "",
    employeeID: "",
    email: "",
    mobile: "",
    idCard: "",
    password: "",
  });

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/users", newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container fluid>
        <Suspense fallback={<Loading />}>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={WelcomeBanner} />
            <Route
              path="/form"
              render={() => <Form newUser={newUser} setNewUser={setNewUser} />}
            />
            <Route
              path="/preview"
              render={() => (
                <Preview newUser={newUser} handleSubmit={handleSubmit} />
              )}
            />
            <Route path="/login" component={Login} />
            <Route
              path="/success"
              render={() => <Success newUser={newUser} />}
            />
            <Route
              path="/cart" component={Cart}
            />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
