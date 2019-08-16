import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../../components/UserInfo';
import MenuTab from '../../components/Menutab';
import Loader from '../../components/Loader/index';
import { getViewedUser, setViewedUser, profileCleanUp } from '../../store/actions/viewProfile';
import { getFollowingAction } from '../../store/actions/Membership';

const Dashboard = ({
  history,
  match,
  user,
  isLoading,
  viewedUser,
  getUserInfo,
  setUserInfo,
}) => {
  const { username } = match.params;

  useEffect(() => {
    if (username !== user.username && username !== viewedUser.username) {
      getUserInfo({ username, history, user });
    } else if (username === user.username) {
      setUserInfo(user);
    }
  }, [username, viewedUser, user]);

  return (
    <Fragment>
      {isLoading ? <Loader /> : <UserInfo user={viewedUser} />}
      <MenuTab match={match} user={user} history={history} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  viewedUser: state.viewProfile.user,
  isFollowed: state.viewProfile.isFollowed,
  isCompleted: state.viewProfile.isCompleted,
  error: state.viewProfile.error,
  isLoading: state.viewProfile.isLoading
});

const mapDispatchToProps = {
  getUserInfo: getViewedUser,
  setUserInfo: setViewedUser,
  cleanUp: profileCleanUp,
  getFollowing: getFollowingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
