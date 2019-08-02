// import { toast } from 'react-toastify';
import { axiosCall, saveToLocalStorage } from '../../../utils';

const signUpSuccess = user => ({ type: 'SIGNUP_SUCCESS', payload: { user, isCompleted: true, isAuthenticated: true } });
const signUp = () => ({ type: 'SIGNUP', payload: { isSubmit: true } });
const signUpError = payload => ({ type: 'SIGNUP_ERROR', payload });
const setUpUser = payload => ({ type: 'SETUP_USER', payload });
export const cleanUpAuth = () => ({ type: 'CLEAN_UP' });

export const signUpAction = values => async (dispatch) => {
  dispatch(cleanUpAuth());
  dispatch(signUp());
  try {
    const result = await axiosCall({ path: '/api/v1/users/signup', payload: values, method: 'post' });
    saveToLocalStorage(result.user);
    dispatch(signUpSuccess(result.user));
  } catch (error) {
    const { response } = error;
    const message = response.data.message || response;
    dispatch(signUpError(message));
  }
};

export const getUser = isAuth => (dispatch) => {
  if (!isAuth && localStorage.token && localStorage.user) {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    dispatch(setUpUser(user));
  }
};
