import * as types from '../../actions/actionTypes';
import { bookmarkArticle } from '../initialState';

const bookmarks = (state = bookmarkArticle, { type, payload }) => {
  switch (type) {
    case types.BOOKMARK_ARTICLE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case types.BOOKMARK_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isCompleted: true,
      };
    case types.BOOKMARK_ARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case types.BOOKMARK_ARTICLE_CLEAN_UP:
      return {
        ...bookmarkArticle
      };
    default:
      return state;
  }
};

export default bookmarks;
