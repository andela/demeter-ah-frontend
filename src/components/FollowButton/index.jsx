import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import './index.scss';
import { followUser, getFollowersAction } from '../../store/actions/Membership';
import { getViewedUser } from '../../store/actions/viewProfile';
import { updateProfileInfo } from '../../store/actions/editProfile';

const Followbtn = ({
  user,
  viewedUser,
  followAction,
  isFollowed,
  getFollower,
  updateProfile,
  getViewedUserInfo,
  isAuthenticated,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  let isSubscribe = true;

  const handleFollow = async () => {
    if (isSubscribe) setIsFollowing(true);
    // follow user
    await followAction(viewedUser.id);
    // get viewed user updated info
    await getViewedUserInfo({
      username: viewedUser.username,
      user
    });
    if (isSubscribe) setIsFollowing(false);
    // update his following list
    await getFollower(viewedUser.username);
    // update user profile
    await updateProfile(user);
  };

  useEffect(() => () => {
    isSubscribe = false;
  }, []);

  return (user.username !== viewedUser.username && isAuthenticated)
    ? (
      <Button
        type="submit"
        classes={`followBtnComp ${isFollowed ? 'follow' : 'unfollow'}`}
        isSubmit={isFollowing}
        onClick={handleFollow}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </Button>
    )
    : '';
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  viewedUser: state.viewProfile.user,
  isFollowed: state.viewProfile.user.isFollowed
});

const mapDispatchToProps = {
  getFollower: getFollowersAction,
  followAction: followUser,
  getViewedUserInfo: getViewedUser,
  updateProfile: updateProfileInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Followbtn);
