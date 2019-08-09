import { articles as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';
import articlesReducer from './index';

describe('ARTICLE REDUCER', () => {
  test('should return initial state', () => {
    expect(articlesReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle OPEN_PUBLISH_MODAL', () => {
    expect(articlesReducer(initialState, {
      type: types.OPEN_PUBLISH_MODAL,
      openPublishModal: true,
    })).toEqual({
      ...initialState,
      openPublishModal: true
    });
  });

  test('should handle ARTICLE_CLEAN_UP', () => {
    expect(articlesReducer(initialState, {
      type: types.ARTICLE_CLEAN_UP,
    })).toEqual({
      ...initialState,
    });
  });

  test('should handle CLOSE_PUBLISH_MODAL', () => {
    expect(articlesReducer(initialState, {
      type: types.CLOSE_PUBLISH_MODAL,
      openPublishModal: false
    })).toEqual({
      ...initialState,
      openPublishModal: false
    });
  });

  test('should handle ARTICLE_PUBLISH', () => {
    expect(articlesReducer(initialState, {
      type: types.ARTICLE_PUBLISH,
    })).toEqual({
      ...initialState,
      response: {},
      isPublishing: true
    });
  });

  test('should handle ARTICLE_DRAFT', () => {
    expect(articlesReducer(initialState, {
      type: types.ARTICLE_DRAFT,
    })).toEqual({
      ...initialState,
      response: {},
      isDrafting: true
    });
  });

  test('should handle CREATE_ARTICLE_SUCCESS', () => {
    expect(articlesReducer(initialState, {
      type: types.CREATE_ARTICLE_SUCCESS,
      resp: { message: 'message' }

    })).toEqual({
      ...initialState,
      response: { message: 'message' },
      isPublishing: false,
      isDrafting: false
    });
  });

  test('should handle CREATE_ARTICLE_ERROR', () => {
    expect(articlesReducer(initialState, {
      type: types.CREATE_ARTICLE_ERROR,
      resp: { error: 'error' }

    })).toEqual({
      ...initialState,
      response: { error: 'error' },
      isPublishing: false,
      isDrafting: false
    });
  });
});
