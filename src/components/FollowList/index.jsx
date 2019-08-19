import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getFollowingAction, getFollowersAction, followUser } from '../../store/actions/Membership';
import { updateProfileInfo } from '../../store/actions/editProfile';

const FollowList = ({
  member,
  type,
  match,
  showButton,
  user,
  getFollowing,
  getFollowers,
  updateProfile,
  followUserAction,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  let followStatus = null;
  let button = 'Following';

  if (member.followers) {
    followStatus = (member.followers.length !== 0);
    button = followStatus ? 'Following' : 'Follow';
  }
  const thisUser = (match.params.username === user.username);

  const handleFollow = async ({ target: { id } }) => {
    setIsFollowing(true);
    await followUserAction(id);
    if (thisUser) {
      await getFollowing();
    } else {
      type === 'follower' ? await getFollowers(match.params.username) : await getFollowing(match.params.username);
      setIsFollowing(false);
    }
    await updateProfile(user);
  };

  return (
    <li key={member.id} className="followList">
      {member.image
        ? (
          <div
            style={{ backgroundImage: `url(${member.image})` }}
            className="dp"
          />
        )
        : (
          <div className="dp bg-purple-500">
            <p className="altDp">
              {String(member.firstName)
                .substring(1, 0)
                .toUpperCase()}
            </p>
          </div>
        )}
      <div className="info">
        <h4 className="fullname">{`${member.firstName} ${member.lastName}`}</h4>
        <p className="bio">{member.bio}</p>
      </div>
      {
        (showButton && (user.username !== member.username))
          ? (
            <button
              id={member.id}
              type="button"
              disabled={isFollowing}
              className={button === 'Following' ? 'unfollow' : 'follow'}
              onClick={handleFollow}
            >
              { isFollowing ? 'Loading..' : button}
            </button>
          )
          : ''
      }
    </li>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  membership: state.membership,
});

const mapDispatchToProps = {
  getFollowing: getFollowingAction,
  getFollowers: getFollowersAction,
  followUserAction: followUser,
  updateProfile: updateProfileInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowList);
