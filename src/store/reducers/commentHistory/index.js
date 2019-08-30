import * as types from '../../actions/actionTypes';
import { commentHistory } from '../initialState';

export default function commentHistoryReducer(state = commentHistory, { type, payload }) {
  switch (type) {
    case types.COMMENT_HISTORY_PENDING:
      return { ...state, ...payload };
    case types.COMMENT_HISTORY_SUCCESS:
      return { ...state, ...payload };
    case types.COMMENT_HISTORY_FAILURE:
      return { ...state, ...payload };
    case types.COMMENT_HISTORY_CLEANUP:
      return {
        ...state,
        ...commentHistory,
      };
    default:
      return state;
  }
}
