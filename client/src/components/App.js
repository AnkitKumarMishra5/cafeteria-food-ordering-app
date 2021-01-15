import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import PreviewForm from './PreviewForm/';
import Menu from './Menu/';
import LoginForm from './LoginForm/';
const App = () =>{
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      {/* <Route exact path="/" component={PreviewForm} /> */}
    </Switch>
  </Router>
  );
}

export default App;
