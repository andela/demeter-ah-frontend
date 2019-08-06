import * as types from '../../actions/actionTypes';
import { resetPassword } from '../initialState';

export default function authReducer(state = resetPassword, action) {
  switch (action.type) {
    case types.RESET_SUCCESS:
      return { ...state, response: action.reset, isSubmitting: false };
    case types.RESET_ERROR:
      return { ...state, response: action.reset, isSubmitting: false };
    case types.RESET_SUBMIT:
      return { ...state, isSubmitting: true };
    case types.RESET_CLEAN_UP:
      return { ...state, ...resetPassword };
    default:
      return state;
  }
}
