import React from 'react';
import { connect } from 'react-redux';
import Routes from '../../routes';
import ArticleLoader from '../../components/ArticleLoader';

const AuthWrapper = ({ isSettingAuth }) => (
  isSettingAuth ? (<ArticleLoader />) : <Routes />
);

const mapStateToProps = state => ({
  isSettingAuth: state.auth.isSettingAuth
});

export default connect(mapStateToProps)(AuthWrapper);
