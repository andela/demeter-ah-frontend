import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/signup';

const setUser = (props) => {
  useEffect(() => {
    props.getUser(props.isAuthenticated);
  });
  return (
    <></>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  getUser: isAuth => dispatch(getUser(isAuth))
});

export default connect(mapStateToProps, mapDispatchToProps)(setUser);
