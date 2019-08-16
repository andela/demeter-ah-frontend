import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';
import callToast from '../../../components/Toast';

export const profilePending = () => ({
  type: types.VIEW_PROFILE_PENDING,
  payload: {
    isLoading: true,
    isCompleted: false,
    error: null,
  },
});

export const profileSuccess = user => ({
  type: types.VIEW_PROFILE_SUCCESS,
  payload: {
    user,
    isLoading: false,
    error: null,
    isCompleted: true,
  },
});

export const profileFailure = error => ({
  type: types.VIEW_PROFILE_FAILURE,
  payload: {
    isLoading: false,
    error,
  },
});

export const profileCleanUp = () => ({
  type: types.VIEW_PROFILE_CLEANUP,
});

export const getViewedUser = ({ username, history, user }) => async (dispatch) => {
  dispatch(profilePending());
  try {
    const result = await axiosCall({
      method: 'get',
      path: `/api/v1/profiles/${username}?userId=${user.id}`,
    });
    dispatch(profileSuccess(result.user));
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(profileFailure(error));
    callToast(error, 'error');
    if (history) history.push('/');
  }
};

export const setViewedUser = user => async (dispatch) => {
  dispatch(profileSuccess(user));
};
