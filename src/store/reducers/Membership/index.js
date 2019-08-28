import * as types from '../../actions/actionTypes';
import { membership } from '../initialState';

export default function authReducer(state = membership, { type, payload }) {
  switch (type) {
    case types.MEMBERS_PENDING:
      return { ...state, ...payload };
    case types.FOLLOWERS_SUCCESS:
      return { ...state, ...payload };
    case types.FOLLOWING_SUCCESS:
      return { ...state, ...payload };
    case types.FOLLOWING_CLEANUP:
      return { ...state, ...payload };
    case types.FOLLOWERS_CLEANUP:
      return { ...state, ...payload };
    case types.MEMBERS_ERROR:
      return { ...state, ...payload };
    default:
      return state;
  }
}
