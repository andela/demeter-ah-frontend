import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getFollowingAction } from '../../store/actions/Membership';
import FollowList from '../../components/FollowList';
import callToast from '../../components/Toast';

const Following = (props) => {
  const {
    user,
    history,
    getFollowingAction: getFollowing,
    response = {},
    match,
    membership: { following, error },
  } = props;

  useEffect(
    () => {
      if (match.params.username !== user.username) {
        getFollowing(match.params.username);
      } else {
        getFollowing();
      }
      if (response.error) {
        callToast(response.error, 'error');
      } else if (response.message || response.user) {
        callToast(response.message || 'Follow successful', 'success');
      }
    },
    [match.params.username, error, JSON.stringify(following)]
  );

  return (
    <div className="following">
      <ul className="list w-11/12 md:w-3/5">
        {following.map(({ followed }) => (
          <FollowList key={followed.id} match={match} showButton member={followed} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  membership: state.membership,
});

const mapDispatchToProps = {
  getFollowingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
