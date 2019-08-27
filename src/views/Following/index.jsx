/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getFollowingAction, followingCleanUp } from '../../store/actions/Membership';
import FollowList from '../../components/FollowList';
import Loader from '../../components/Loader';
import NoItem from '../../components/NoItem';

const Following = (props) => {
  const {
    user,
    getFollowingAction: getFollowing,
    followingCleanUp: cleanUp,
    match,
    membership: { following },
  } = props;


  const fetchFollowingList = () => {
    if (match.params.username !== user.username) {
      getFollowing(match.params.username);
    } else {
      getFollowing();
    }
  };

  useEffect(
    () => {
      let mounted = true;
      if (mounted) fetchFollowingList();
      return () => {
        mounted = false;
        cleanUp();
      };
    },
    [match.params.username]
  );

  return (
    <div className="following">
      <ul className="list w-11/12 md:w-3/5">
        {!following
          ? <Loader />
          : (following.length === 0)
            ? (
              <NoItem message="No followings yet" />
            )
            : following.map(({ followed }) => (
              <FollowList
                key={followed.id}
                match={match}
                showButton
                member={followed}
              />
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
  followingCleanUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
