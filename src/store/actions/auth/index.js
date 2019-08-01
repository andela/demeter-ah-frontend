import { axiosCall, saveToLocalStorage } from '../../../utils';

const signUp = () => ({ type: 'SIGNUP', payload: { isSubmit: true } });
const signUpSuccess = payload => ({ type: 'SIGNUP_SUCCESS', payload });
const signUpError = payload => ({ type: 'SIGNUP_ERROR', payload });
const cleanUpAuth = () => ({ type: 'CLEAN_UP' });

export const signUpAction = (values, history) => async (dispatch) => {
  dispatch(cleanUpAuth());
  dispatch(signUp());
  try {
    const result = await axiosCall({ path: '/api/v1/users/signup', payload: values, method: 'post' });
    saveToLocalStorage(result.user);
    dispatch(signUpSuccess(result.user));
    history;
  } catch (error) {
    const { response } = error;
    const message = response.data.message || response;
    dispatch(signUpError(message));
  }
};
