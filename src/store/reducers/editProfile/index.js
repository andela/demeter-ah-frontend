import * as types from '../../actions/actionTypes';
import { editProfile } from '../initialState';

export default function authReducer(state = editProfile, action) {
  switch (action.type) {
    case types.EDIT_PROFILE_SUBMIT:
      return {
        ...state,
        isLoading: true,
        isCompleted: false,
        error: null,
      };
    case types.SAVE_LOCAL_IMAGE:
      return { ...state, ...action.payload };
    case types.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.EDIT_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case types.EDIT_PROFILE_CLEAN_UP:
      return {
        ...state,
        ...editProfile,
      };
    default:
      return state;
  }
}
