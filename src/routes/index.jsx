import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/Signup';
import SetUser from './SetUser';
// import Route from './PrivateRoute';

const Routes = () => (
  <>
    <Router>
      <SetUser path="*" component={() => ('')} />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
    <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
  </>
);

export default Routes;
