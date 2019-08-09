import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../views/Home';
import NavBar from '../components/NavBar';
import ResetPassword from '../views/ResetPassword';
import SignUp from '../views/Signup';
import SignIn from '../views/SignIn';
import ArticleCreate from '../views/Article';

const Routes = () => (
  <Router>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/article/create" component={ArticleCreate} />
    <Route path="/reset-password" component={ResetPassword} />
    <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
  </Router>
);

export default Routes;
