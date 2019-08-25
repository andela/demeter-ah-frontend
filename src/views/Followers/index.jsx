/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../Following/index.scss';
import { getFollowersAction } from '../../store/actions/Membership';
import FollowList from '../../components/FollowList';
import Loader from '../../components/Loader';
import NoItem from '../../components/NoItem';

const Followers = (props) => {
  const {
    user,
    match,
    getFollowersAction: getFollowers,
    membership: {
      followers, error,
    },
  } = props;

  const [showButton, setshowButton] = useState((match.params.username !== user.username));
  const [isMounted, setIsMounted] = useState(false);
  let isSubscribe = true;

  const fetchFollowersList = async () => {
    if (match.params.username !== user.username) {
      await getFollowers(match.params.username);
      if (isSubscribe) setshowButton(true);
    } else {
      await getFollowers();
      if (isSubscribe) setshowButton(false);
    }
    if (isSubscribe) setIsMounted(true);
  };

  useEffect(
    () => {
      fetchFollowersList();
      return () => {
        isSubscribe = false;
      };
    },
    [match.params.username, error, JSON.stringify(followers)]
  );

  return (
    <div className="followers">
      <ul className="list w-10/12 md:w-3/5">
        {!isMounted
          ? <Loader />
          : (followers.length === 0)
            ? (
              <NoItem message="No followers yet" />
            )
            : followers.map(({ follower }) => (
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
