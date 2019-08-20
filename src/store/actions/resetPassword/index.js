import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const cleanUpReset = () => ({ type: types.RESET_CLEAN_UP });
export const submitReset = () => ({ type: types.RESET_SUBMIT });
export const resetSuccess = message => ({ type: types.RESET_SUCCESS, reset: { message } });
export const resetError = error => ({ type: types.RESET_ERROR, reset: { error } });

export const sendResetLink = payload => async (dispatch) => {
  dispatch(cleanUpReset());
  dispatch(submitReset(true));
  try {
    const result = await axiosCall({ path: '/api/v1/users/reset-password', payload, method: 'post' });
    dispatch(resetSuccess(result.message));
  } catch (err) {
    const { response } = err;
    const error = response.data.message || response;
    dispatch(resetError(error));
  }
};
