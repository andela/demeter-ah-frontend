import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../Button';
import './index.scss';
import { followUser, getFollowersAction } from '../../store/actions/Membership';
import { updateProfileInfo } from '../../store/actions/editProfile';

const Followbtn = ({
  user, viewedUser, followAction, isFollowed, getFollower, updateProfile,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = async () => {
    setIsFollowing(true);
    await followAction({ viewedUser, user });
    await getFollower(viewedUser.username);
    await updateProfile(user);
  };
  return user.username !== viewedUser.username
    ? (
      <Button
        type="submit"
        classes={`followBtnComp ${isFollowed ? 'follow' : 'unfollow'}`}
        isSubmit={isFollowing}
        onClick={handleFollow}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    )
    : '';
};

const mapStateToProps = state => ({
  user: state.auth.user,
  viewedUser: state.viewProfile.user,
  isFollowed: state.viewProfile.user.isFollowed
});

const mapDispatchToProps = {
  getFollower: getFollowersAction,
  followAction: followUser,
  updateProfile: updateProfileInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Followbtn);
