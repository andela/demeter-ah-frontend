import * as types from '../../actions/actionTypes';
import { searchInitialState } from '../initialState';

const search = (state = searchInitialState, { type, payload }) => {
  switch (type) {
    case types.SEARCH_PENDING:
      return {
        ...state,
        isLoading: true,
        keyword: payload
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCompleted: true,
        articles: payload
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case types.SEARCH_CLEAN_UP:
      return searchInitialState;
    default:
      return state;
  }
};

export default search;
