// import { useState} from "react";
import React, { Suspense, lazy, useState, useEffect } from "react";
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
const Login = lazy(() => import("./components/Login/Login"));
const Success = lazy(() => import("./components/Success/Success"));
const Cart = lazy(() => import("./components/Cart/Cart"));

const App = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    orgName: "",
    employeeId: "",
    email: "",
    mobile: "",
    idCard: "",
    password: "",
  });

  const [session, setSession] = useState(false);

  useEffect(() => {
    setNewUser({
      username: "",
      orgName: "",
      employeeId: "",
      email: "",
      mobile: "",
      idCard: "",
      password: "",
    })
  }, [session]);

  const handleSubmit = () => {
    var formdata = new FormData();
    formdata.append('file', newUser.idCard);
    formdata.append('upload_preset','ercok6k3');
    
    axios.post("https://api.cloudinary.com/v1_1/akm5514/image/upload", formdata)
    .then((response) => {
      console.log(response.data.secure_url)
      setNewUser({...newUser, idCard: response.data.secure_url})
      axios
      .post("http://localhost:5000/api/users", {...newUser, idCard: response.data.secure_url})
      .then((res) => {
        setNewUser({...newUser, regId: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  return (
    <>
      <Container fluid>
        <Suspense fallback={<Loading />}>
          <NavbarComponent user={newUser.username} session={session} setSession={setSession}/>
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
            <Route
            path="/login"
            render={() => <Login newUser={newUser} setNewUser={setNewUser} />}
            />
            <Route
              path="/success"
              render={() => <Success user={newUser} />}
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
