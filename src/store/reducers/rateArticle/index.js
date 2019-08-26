import * as types from '../../actions/actionTypes';
import { rateArticle } from '../initialState';

export default function rateReducer(state = rateArticle, { type, payload }) {
  switch (type) {
    case types.RATE_PENDING:
      return { ...state, ...payload };
    case types.RATE_SUCCESS:
      return { ...state, ...payload };
    case types.RATE:
      return { ...state, ...payload };
    case types.RATE_CLEANUP:
      return {
        ...state,
        ...rateArticle,
      };
    default:
      return state;
  }
}
