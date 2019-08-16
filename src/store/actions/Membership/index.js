import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';
import callToast from '../../../components/Toast';
import { getViewedUser } from '../viewProfile';

export const membersPending = () => ({
  type: types.MEMBERS_PENDING,
  payload: {
    isLoading: true,
    isSuccess: false,
  },
});

export const followingSuccess = following => ({
  type: types.FOLLOWING_SUCCESS,
  payload: {
    following,
    isLoading: false,
  },
});

export const followerSuccess = followers => ({
  type: types.FOLLOWERS_SUCCESS,
  payload: {
    followers,
    isLoading: false,
  },
});

export const membersError = error => ({
  type: types.MEMBERS_ERROR,
  payload: {
    error,
    isLoading: false,
  }
});


export const getFollowersAction = username => async (dispatch) => {
  dispatch(membersPending());
  try {
    let result;
    if (username) {
      result = await axiosCall({
        path: `/api/v1/members/${username}/followers`,
        method: 'get',
      });
    } else {
      result = await axiosCall({
        path: '/api/v1/members/followers',
        method: 'get',
      });
    }
    const { user: { followers } } = result;

    dispatch(followerSuccess(followers));
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(membersError(error));
  }
};

export const getFollowingAction = username => async (dispatch) => {
  dispatch(membersPending());
  try {
    let result;
    if (username) {
      result = await axiosCall({
        path: `/api/v1/members/${username}/following`,
        method: 'get',
      });
    } else {
      result = await axiosCall({
        path: '/api/v1/members/following',
        method: 'get',
      });
    }
    const { user: { following } } = result;
    dispatch(followingSuccess(following));
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(membersError(error));
  }
};

export const followUser = ({ viewedUser, user }) => async (dispatch) => {
  try {
    await axiosCall({
      path: '/api/v1/members',
      method: 'post',
      payload: { followId: viewedUser.id }
    });

    if (viewedUser.username) {
      await dispatch(getViewedUser({
        username: viewedUser.username,
        user
      }));
    }
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(membersError(error));
    callToast(error, 'error');
  }
};
