import bookmarksReducer from './index';
import { viewBookmarkedArticle as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

const articles = [
  {
    id: 1,
    ttle: 'Intoduction to programming',
    description: 'Programming is coding'
  }
];

describe('View Bookmarked Articles Reducer', () => {
  it('Should return the initial state', () => {
    expect(bookmarksReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle VIEW_BOOKMARKED_ARTICLE_PENDING', () => {
    expect(bookmarksReducer(
      initialState, {
        type: types.VIEW_BOOKMARKED_ARTICLE_PENDING
      }
    )).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('Should handle VIEW_BOOKMARKED_ARTICLE_SUCCESS', () => {
    expect(bookmarksReducer(
      initialState, {
        type: types.VIEW_BOOKMARKED_ARTICLE_SUCCESS,
        payload: articles
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isCompleted: true,
      articles,
    });
  });

  it('Should handle VIEW_BOOKMARKED_ARTICLE_ERROR', () => {
    expect(bookmarksReducer(
      initialState, {
        type: types.VIEW_BOOKMARKED_ARTICLE_ERROR,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      isLoading: false
    });
  });

  it('Should handle VIEW_BOOKMARKED_ARTICLE_CLEAN_UP', () => {
    expect(bookmarksReducer(
      initialState, {
        type: types.EDIT_PROFILE_CLEAN_UP
      }
    )).toEqual({
      ...initialState
    });
  });
});
