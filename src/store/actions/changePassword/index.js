import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const cleanUpPasswordChange = () => ({ type: types.CHANGE_PASSWORD_CLEAN_UP });
export const submitPasswordChange = () => ({ type: types.CHANGE_PASSWORD_SUBMIT });
export const passwordChangeSuccess = message => (
  { type: types.CHANGE_PASSWORD_SUCCESS, change: { message } }
);
export const passwordChangeError = error => (
  { type: types.CHANGE_PASSWORD_ERROR, change: { error } }
);

export const changePassword = payload => async (dispatch) => {
  dispatch(submitPasswordChange(true));
  try {
    const result = await axiosCall({ path: `/api/v1/users/change-password?resetToken=${payload.resetToken}`, payload: { password: payload.password }, method: 'put' });
    dispatch(passwordChangeSuccess(result.message));
  } catch (err) {
    const { response } = err;
    const error = response.data.message || response;
    dispatch(passwordChangeError(error));
  }
};
