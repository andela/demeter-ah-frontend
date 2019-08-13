import * as types from '../../actions/actionTypes';
import { viewProfile } from '../initialState';

export default function authReducer(state = viewProfile, { type, payload }) {
  switch (type) {
    case types.VIEW_PROFILE_PENDING:
      return { ...state, ...payload };
    case types.VIEW_PROFILE_SUCCESS:
      return { ...state, ...payload };
    case types.VIEW_PROFILE_FAILURE:
      return { ...state, ...payload };
    case types.VIEW_PROFILE_CLEANUP:
      return {
        ...state,
        ...viewProfile,
      };
    default:
      return state;
  }
}
