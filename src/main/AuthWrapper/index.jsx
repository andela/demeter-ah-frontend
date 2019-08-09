import React from 'react';
import { connect } from 'react-redux';
import Routes from '../../routes';

const AuthWrapper = connect(({ auth }) => ({ auth }))(({ auth }) => (auth.isSettingAuth ? (
  null
) : <Routes />));

export default AuthWrapper;
