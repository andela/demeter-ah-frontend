import { axiosCall, saveToLocalStorage } from '../../../utils';

export const signUpSuccess = user => ({ type: 'SIGNUP_SUCCESS', payload: { user, isCompleted: true, isAuthenticated: true } });
export const signUp = () => ({ type: 'SIGNUP', payload: { isSubmit: true } });
export const signUpError = payload => ({ type: 'SIGNUP_ERROR', payload });
export const setUpUser = payload => ({ type: 'SETUP_USER', payload });
export const cleanUpAuth = () => ({ type: 'CLEAN_UP' });

export const signUpAction = values => async (dispatch) => {
  dispatch(cleanUpAuth());
  dispatch(signUp());
  try {
    const result = await axiosCall({ path: '/api/v1/users/signup', payload: values, method: 'post' });
    saveToLocalStorage(result.user);
    dispatch(signUpSuccess(result.user));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    if (!response) {
      dispatch(signUpError('Network error Try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    dispatch(signUpError(message));
  }
};

export const getUser = () => async (dispatch) => {
  /* istanbul ignore next */
  // if (localStorage.token && localStorage.user) {
  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if (user) {
      const result = await axiosCall({
        method: 'get',
        path: `/api/v1/profiles/${user.username}`,
      });
      const payload = {
        user: result.user,
        isAuthenticated: true
      };
      dispatch(setUpUser(payload));
    } else {
      // eslint-disable-next-line no-throw-literal
      throw null;
    }
  } catch (error) {
    const payload = {
      user: {},
      isAuthenticated: false
    };
    dispatch(setUpUser(payload));
  }
  // }
};
