import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, isAuthenticated, ...props }) => (
  <Route
    {...props}
    render={innerProps => (isAuthenticated ? <Component {...innerProps} /> : <Redirect to="/" />)
    }
  />
);


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(privateRoute);
