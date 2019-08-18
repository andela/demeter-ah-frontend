/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getFollowingAction } from '../../store/actions/Membership';
import FollowList from '../../components/FollowList';
import Loader from '../../components/Loader';

const Following = (props) => {
  const {
    user,
    getFollowingAction: getFollowing,
    match,
    membership: { following },
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const fetchFollowingList = async () => {
    (match.params.username !== user.username)
      ? await getFollowing(match.params.username)
      : await getFollowing();
    setIsMounted(true);
  };

  useEffect(
    () => {
      fetchFollowingList();
    },
    [match.params.username]
  );

  return (
    <div className="following">
      <ul className="list w-11/12 md:w-3/5">
        {!isMounted
          ? <Loader />
          : (following.length === 0)
            ? (
              <div className="w-full flex h-full justify-center items-center">
                <p className="text-center font-semibold text-lg opacity-25">No followings yet</p>
              </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
