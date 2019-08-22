import * as types from '../../actions/actionTypes';
import { viewBookmarkedArticle } from '../initialState';

const bookmarks = (state = viewBookmarkedArticle, { type, payload }) => {
  switch (type) {
    case types.VIEW_BOOKMARKED_ARTICLE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case types.VIEW_BOOKMARKED_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCompleted: true,
        articles: payload
      };
    case types.VIEW_BOOKMARKED_ARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case types.VIEW_BOOKMARKED_ARTICLE_CLEAN_UP:
      return {
        ...viewBookmarkedArticle
      };
    default:
      return state;
  }
};

export default bookmarks;
