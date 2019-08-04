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
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    dispatch(signUpError(message));
  }
};

export const getUser = () => (dispatch) => {
  /* istanbul ignore next */
  if (localStorage.token && localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(setUpUser(user));
  }
};
