import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../../components/UserInfo';
import MenuTab from '../../components/Menutab';
import Loader from '../../components/Loader/index';
import { getViewedUser, setViewedUser } from '../../store/actions/viewProfile';
import callToast from '../../components/Toast';

const Dashboard = ({
  history,
  match,
  user,
  isCompleted,
  isLoading,
  viewedUser,
  getUserInfo,
  setUserInfo,
  error,
}) => {
  const { username } = match.params;

  useEffect(() => {
    if (error) {
      callToast(error, 'error');
    } else if (username !== user.username && username !== viewedUser.username) {
      getUserInfo(username);
    } else if (username === user.username) {
      setUserInfo(user);
    }
  }, [username, isCompleted, error]);
  return (
    <Fragment>
      { isLoading ? <Loader /> : <UserInfo user={viewedUser} />}
      <MenuTab match={match} user={user} history={history} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  viewedUser: state.viewProfile.user,
  isCompleted: state.viewProfile.isCompleted,
  error: state.viewProfile.error,
  isLoading: state.viewProfile.isLoading,
});

const mapDispatchToProps = {
  getUserInfo: getViewedUser,
  setUserInfo: setViewedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
