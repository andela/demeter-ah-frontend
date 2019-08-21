import * as types from '../../actions/actionTypes';
import { comments } from '../initialState';

export default function commentReducer(state = comments, { type, payload }) {
  switch (type) {
    case types.COMMENT_PENDING:
      return { ...state, ...payload };
    case types.COMMENT_SUCCESS:
      return { ...state, ...payload };
    case types.COMMENT_FAILURE:
      return { ...state, ...payload };
    case types.COMMENT_CLEANUP:
      return {
        ...state,
        ...comments,
      };
    default:
      return state;
  }
}
