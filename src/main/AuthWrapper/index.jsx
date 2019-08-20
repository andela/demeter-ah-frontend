import React from 'react';
import { connect } from 'react-redux';
import Routes from '../../routes';
import Loader from '../../components/skeleton';

const AuthWrapper = ({ isSettingAuth }) => (
  isSettingAuth ? (<Loader />) : <Routes />
);

const mapStateToProps = state => ({
  isSettingAuth: state.auth.isSettingAuth
});

export default connect(mapStateToProps)(AuthWrapper);
