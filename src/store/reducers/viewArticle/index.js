import * as types from '../../actions/actionTypes';
import { viewArticleState } from '../initialState';

const viewArticle = (state = viewArticleState, action) => {
  switch (action.type) {
    case types.VIEW_ARTICLE_PENDING:
      return {
        ...state,
        isLoading: true,
        isCompleted: false,
        error: null,
      };
    case types.VIEW_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.VIEW_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case types.VIEW_ARTICLE_CLEANUP:
      return {
        ...viewArticleState,
      };
    default:
      return state;
  }
};

export default viewArticle;
