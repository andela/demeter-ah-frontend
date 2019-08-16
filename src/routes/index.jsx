import React, { Fragment } from 'react';
import { Route, HashRouter as Router, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../views/Home';
import NavBar from '../components/NavBar';
import ResetPassword from '../views/ResetPassword';
import SignUp from '../views/Signup';
import SignIn from '../views/SignIn';
import ArticleCreate from '../views/Article';
import Profile from '../views/Profile';
import Following from '../views/Following';
import Followers from '../views/Followers';
import Dashboard from '../views/Dashboard';
import PrivateRoute from './PrivateRoute';

const app = ({ history }) => (
  <Fragment>
    <NavBar history={history} />
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <PrivateRoute path="/article/create" component={ArticleCreate} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/profile/:username" component={Dashboard} />
    <PrivateRoute path="/profile/:username/editprofile" component={Profile} />
    <PrivateRoute path="/profile/:username/following" component={Following} />
    <PrivateRoute path="/profile/:username/followers" component={Followers} />
    <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
  </Fragment>
);

const AppWithRouter = withRouter(app);

const Routes = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default Routes;
