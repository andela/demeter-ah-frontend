import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/Signup';
import GuestRoute from './GuestRoute';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <GuestRoute path="/signup" component={SignUp} />
  </Router>
);

export default Routes;
