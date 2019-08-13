import { axiosCall, saveToLocalStorage } from '../../../utils';

export const signInPending = () => ({
  type: 'SIGNIN_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null
  }
});

export const signInSuccess = user => ({
  type: 'SIGNIN_SUCCESS',
  payload: {
    isLoading: false,
    user,
    isCompleted: true,
    isAuthenticated: true,
  }
});
export const signInError = error => ({
  type: 'SIGNIN_ERROR',
  payload: {
    error,
    isCompleted: true,
    isLoading: false,
  }
});
export const cleanUpAuth = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false
  }
});

export const signInAction = values => async (dispatch) => {
  await dispatch(signInPending());
  try {
    const result = await axiosCall({ path: '/api/v1/users/login', payload: values, method: 'post' });
    saveToLocalStorage(result.user);
    dispatch(signInSuccess(result.user));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    dispatch(signInError(message));
  }
};

export const socialSignInAction = ({ username, token, history }) => async (dispatch) => {
  try {
    await dispatch(signInPending());
    const result = await axiosCall({ method: 'get', path: `/api/v1/profiles/${username}` });
    saveToLocalStorage({ ...result.user, token });
    await localStorage.setItem('socialLogin', true);
    await dispatch(signInSuccess(result.user));
    history.push('/');
  } catch ({ response }) {
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    await dispatch(signInError(message));
  }
};
