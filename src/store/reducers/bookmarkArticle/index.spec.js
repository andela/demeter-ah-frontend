import bookmarkArticleReducer from './index';
import { bookmarkArticle as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

describe('Bookmark Article Reducer', () => {
  it('Should return the initial state', () => {
    expect(bookmarkArticleReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle BOOKMARK_ARTICLE_PENDING', () => {
    expect(bookmarkArticleReducer(
      initialState, {
        type: types.BOOKMARK_ARTICLE_PENDING
      }
    )).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('Should handle BOOKMARK_ARTICLE_SUCCESS', () => {
    expect(bookmarkArticleReducer(
      initialState, {
        type: types.BOOKMARK_ARTICLE_SUCCESS
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isCompleted: true
    });
  });

  it('Should handle BOOKMARK_ARTICLE_ERROR', () => {
    expect(bookmarkArticleReducer(
      initialState, {
        type: types.BOOKMARK_ARTICLE_ERROR,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      isLoading: false
    });
  });

  it('Should handle BOOKMARK_ARTICLE_CLEAN_UP', () => {
    expect(bookmarkArticleReducer(
      initialState, {
        type: types.EDIT_PROFILE_CLEAN_UP
      }
    )).toEqual({
      ...initialState
    });
  });
});
