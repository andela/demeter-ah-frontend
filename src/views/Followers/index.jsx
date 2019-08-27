/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../Following/index.scss';
import { getFollowersAction, followersCleanUp } from '../../store/actions/Membership';
import FollowList from '../../components/FollowList';
import Loader from '../../components/Loader';
import NoItem from '../../components/NoItem';

const Followers = (props) => {
  const {
    user,
    match,
    getFollowersAction: getFollowers,
    followersCleanUp: cleanUp,
    membership: {
      followers,
    },
  } = props;

  const [showButton, setshowButton] = useState((match.params.username !== user.username));

  const fetchFollowersList = async () => {
    if (match.params.username !== user.username) {
      getFollowers(match.params.username);
      setshowButton(true);
    } else {
      getFollowers();
      setshowButton(false);
    }
  };

  useEffect(
    () => {
      let mounted = true;
      if (mounted) fetchFollowersList();
      return () => {
        mounted = false;
        cleanUp();
      };
    },
    [match.params.username]
  );

  return (
    <div className="followers">
      <ul className="list w-10/12 md:w-3/5">
        {!followers
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

export default connect(mapStateToProps, { getFollowersAction, followersCleanUp })(
  Followers
);
