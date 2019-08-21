import viewArticle from './index';
import { viewArticleState as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

describe('View Article Reducer', () => {
  it('Should return the initial state', () => {
    expect(viewArticle(undefined, {})).toEqual(initialState);
  });

  it('Should handle VIEW_ARTICLE_PENDING', () => {
    expect(viewArticle(
      initialState, {
        type: types.VIEW_ARTICLE_PENDING,
        payload: {
          isLoading: true,
          isCompleted: false,
        }
      }
    )).toEqual({
      ...initialState,
      isLoading: true,
      isCompleted: false
    });
  });

  it('Should handle VIEW_ARTICLE_SUCCESS', () => {
    expect(viewArticle(
      initialState, {
        type: types.VIEW_ARTICLE_SUCCESS,
        payload: {
          isLoading: false,
          isCompleted: true,
        }
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isCompleted: true
    });
  });

  it('Should handle VIEW_ARTICLE_ERROR', () => {
    expect(viewArticle(
      initialState, {
        type: types.VIEW_ARTICLE_ERROR,
        payload: {
        }
      }
    )).toEqual({
      ...initialState,
      error: {}
    });
  });

  it('Should handle VIEW_ARTICLE_CLEANUP', () => {
    expect(viewArticle(
      initialState, {
        type: types.VIEW_ARTICLE_CLEANUP
      }
    )).toEqual({
      ...initialState
    });
  });
});
