import { axiosCall, clearLocalStorage } from '../../../utils';
import { getUser } from '../signup';

export const signOutAction = () => async (dispatch) => {
  try {
    await axiosCall({ path: '/api/v1/users/signout', method: 'post' });
    clearLocalStorage();
    dispatch(getUser());
  } catch (error) {
    clearLocalStorage();
    dispatch(getUser());
    /* istanbul ignore next */
    const { response } = error;
    /* istanbul ignore next */
    const message = response.data.message || response;
    throw message;
  }
};
