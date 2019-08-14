import React from 'react';
import { connect } from 'react-redux';
import Routes from '../../routes';

const AuthWrapper = ({ isSettingAuth }) => (
  isSettingAuth ? (null) : <Routes />
);

const mapStateToProps = state => ({
  isSettingAuth: state.auth.isSettingAuth
});

export default connect(mapStateToProps)(AuthWrapper);
