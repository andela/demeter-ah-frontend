import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '../../../utils';
import {
  bookmarkArticle,
  bookmarkArticlePending,
  bookmarkArticleSuccess,
  bookmarkArticleError,
  bookmarkArticleCleanUp
} from './index';
import * as types from '../actionTypes';

class CustomError extends Error {
  constructor(message, option = 'string') {
    super(message);
    this.response = option === 'object'
      ? { data: { message: this.message } }
      : { data: { message: false } };
  }
}

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

describe('VIEW BOOKMARK ARTICLE ACTIONS', () => {
  describe('actions', () => {
    test('bookmarkArticlePending should return BOOKMARK_ARTICLE_PENDING', () => {
      const bookmarkArticlePendingAction = bookmarkArticlePending();
      expect(bookmarkArticlePendingAction).toEqual({
        type: types.BOOKMARK_ARTICLE_PENDING,
      });
    });

    test('bookmarkArticle should return BOOKMARK_ARTICLE_SUCCESS', () => {
      const bookmarkArticleSuccessAction = bookmarkArticleSuccess();
      expect(bookmarkArticleSuccessAction).toEqual({
        type: types.BOOKMARK_ARTICLE_SUCCESS
      });
    });

    test('bookmarkArticleError should return BOOKMARK_ARTICLE_ERROR', () => {
      const payload = 'Something went wrong';
      const bookmarkArticleErrorAction = bookmarkArticleError(payload);
      expect(bookmarkArticleErrorAction).toEqual({
        type: types.BOOKMARK_ARTICLE_ERROR,
        payload,
      });
    });

    test('bookmarkArticleCleanUp should return BOOKMARK_ARTICLE_CLEAN_UP', () => {
      const bookmarkArticleCleanUpAction = bookmarkArticleCleanUp();
      expect(bookmarkArticleCleanUpAction).toEqual({
        type: types.BOOKMARK_ARTICLE_CLEAN_UP,
      });
    });
  });

  describe('View Bookmarked Article', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        error: null,
        isLoading: false,
        isCompleted: false,
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
      localStorage.clear();
    });

    test('should unbookmark articles and call bookmark article actions', (done) => {
      const expectedActions = [
        'BOOKMARK_ARTICLE_PENDING',
        'BOOKMARK_ARTICLE_SUCCESS'
      ];
      axiosCall.mockResolvedValue({
        data: 'article bookmark removed successfully',
      });
      store
        .dispatch(
          bookmarkArticle('lorem')
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should send error as just response string message', (done) => {
      const expectedActions = ['BOOKMARK_ARTICLE_PENDING', 'BOOKMARK_ARTICLE_ERROR'];

      axiosCall.mockRejectedValue(
        new CustomError({ response: { message: 'Something went wrong' } })
      );
      store.dispatch(bookmarkArticle('lorem')).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
