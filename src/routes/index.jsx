import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/Signup';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Router>
);

export default Routes;
