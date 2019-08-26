import * as types from '../../actions/actionTypes';
import { articles } from '../initialState';

export default function articlesReducer(state = articles, action) {
  switch (action.type) {
    case types.OPEN_PUBLISH_MODAL:
      return { ...state, openPublishModal: action.openPublishModal };
    case types.ARTICLE_CLEAN_UP:
      return { ...state, response: articles.response };
    case types.CLOSE_PUBLISH_MODAL:
      return { ...state, openPublishModal: action.openPublishModal };
    case types.ARTICLE_PUBLISH:
      return { ...state, response: {}, isPublishing: true };
    case types.ARTICLE_DRAFT:
      return { ...state, response: {}, isDrafting: true };
    case types.CREATE_ARTICLE_SUCCESS:
      return {
        ...state, response: action.resp, isPublishing: false, isDrafting: false
      };
    case types.CREATE_ARTICLE_ERROR:
      return {
        ...state, response: action.resp, isPublishing: false, isDrafting: false
      };
    case types.SET_USERNAME_ARTICLES:
      return {
        ...state, usernameArticles: action.payload
      };
    case types.SET_ARTICLES_STATS:
      return {
        ...state, articleStats: action.payload
      };
    default:
      return state;
  }
}
