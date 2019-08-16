import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../Following/index.scss';
import { getFollowersAction } from '../../store/actions/Membership';
import FollowList from '../../components/FollowList';
import callToast from '../../components/Toast';

const Followers = (props) => {
  const {
    user,
    history,
    response = {},
    match,
    getFollowersAction: getFollowers,
    membership: {
      followers, error,
    },
  } = props;

  const [showButton, setshowButton] = useState((match.params.username !== user.username))

  useEffect(
    () => {
      if (match.params.username !== user.username) {
        getFollowers(match.params.username);
        setshowButton(true);
      } else {
        getFollowers();
        setshowButton(false);
      }
      if (response.error) {
        callToast(response.error, 'error');
      } else if (response.message || response.user) {
        callToast(response.message || 'Follow successful', 'success');
      }
    },
    [match.params.username, error, JSON.stringify(followers)]
  );

  return (
    <div className="followers">
      <ul className="list w-10/12 md:w-3/5">
        {
          followers.map(({ follower }) => (
            <FollowList key={follower.id} showButton={showButton} match={match} member={follower} type="follower" />
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  membership: state.membership,
});

export default connect(mapStateToProps, { getFollowersAction })(
  Followers
);
