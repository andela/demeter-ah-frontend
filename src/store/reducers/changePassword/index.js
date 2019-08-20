import * as types from '../../actions/actionTypes';
import { changePassword } from '../initialState';

export default function changePasswordReducer(state = changePassword, action) {
  switch (action.type) {
    case types.CHANGE_PASSWORD_SUCCESS:
      return { ...state, response: action.change, isSubmitting: false };
    case types.CHANGE_PASSWORD_ERROR:
      return { ...state, response: action.change, isSubmitting: false };
    case types.CHANGE_PASSWORD_SUBMIT:
      return { ...state, isSubmitting: true };
    case types.CHANGE_PASSWORD_CLEAN_UP:
      return { ...state, ...changePassword };
    default:
      return state;
  }
}
