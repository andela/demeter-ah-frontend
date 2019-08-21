import relatedArticles from './index';
import { relatedArticlesState as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

describe('Related Articles Reducer', () => {
  it('Should return the initial state', () => {
    expect(relatedArticles(undefined, {})).toEqual(initialState);
  });

  it('Should handle RELATED_ARTICLES_PENDING', () => {
    expect(relatedArticles(
      initialState, {
        type: types.RELATED_ARTICLES_PENDING,
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

  it('Should handle RELATED_ARTICLES_SUCCESS', () => {
    expect(relatedArticles(
      initialState, {
        type: types.RELATED_ARTICLES_SUCCESS,
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

  it('Should handle RELATED_ARTICLES_ERROR', () => {
    expect(relatedArticles(
      initialState, {
        type: types.RELATED_ARTICLES_ERROR,
        payload: {
        }
      }
    )).toEqual({
      ...initialState,
      error: {}
    });
  });

  it('Should handle RELATED_ARTICLES_CLEANUP', () => {
    expect(relatedArticles(
      initialState, {
        type: types.RELATED_ARTICLES_CLEANUP
      }
    )).toEqual({
      ...initialState
    });
  });
});
