import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '../views/Home';
import SignIn from '../views/SignIn';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
  </Router>
);

export default Routes;
