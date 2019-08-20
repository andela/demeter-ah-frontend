import * as types from '../../actions/actionTypes';
import { relatedArticlesState } from '../initialState';

const relatedArticles = (state = relatedArticlesState, action) => {
  switch (action.type) {
    case types.RELATED_ARTICLES_PENDING:
      return {
        ...state,
        isLoading: true,
        isCompleted: false,
        error: null,
      };
    case types.RELATED_ARTICLES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.RELATED_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case types.RELATED_ARTICLES_CLEANUP:
      return {
        ...state,
        ...relatedArticles,
      };
    default:
      return state;
  }
};

export default relatedArticles;
