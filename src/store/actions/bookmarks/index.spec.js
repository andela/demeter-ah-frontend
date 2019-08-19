import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '../../../utils';
import {
  viewBookmarkPending,
  viewBookmarkSuccess,
  viewBookmarkError,
  viewBookmarkCleanUp,
  viewBookmarkedArticle
} from './index';
import * as types from '../actionTypes';

const articles = [
  {
    id: 1,
    ttle: 'Intoduction to programming',
    description: 'Programming is coding'
  }
];
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
    test('viewBookmarkPending should return VIEW_BOOKMARKED_ARTICLE_PENDING', () => {
      const viewBookmarkPendingAction = viewBookmarkPending();
      expect(viewBookmarkPendingAction).toEqual({
        type: types.VIEW_BOOKMARKED_ARTICLE_PENDING,
      });
    });

    test('viewBookmarkSuccess should return VIEW_BOOKMARKED_ARTICLE_SUCCESS', () => {
      const viewBookmarkSuccessAction = viewBookmarkSuccess(articles);
      expect(viewBookmarkSuccessAction).toEqual({
        type: types.VIEW_BOOKMARKED_ARTICLE_SUCCESS,
        payload: articles,
      });
    });

    test('viewBookmarkError should return VIEW_BOOKMARKED_ARTICLE_ERROR', () => {
      const payload = 'Something went wrong';
      const viewBookmarkErrorAction = viewBookmarkError(payload);
      expect(viewBookmarkErrorAction).toEqual({
        type: types.VIEW_BOOKMARKED_ARTICLE_ERROR,
        payload,
      });
    });

    test('editProfileCleanUp should return VIEW_BOOKMARKED_ARTICLE_CLEAN_UP', () => {
      const viewBookmarkCleanUpAction = viewBookmarkCleanUp();
      expect(viewBookmarkCleanUpAction).toEqual({
        type: types.VIEW_BOOKMARKED_ARTICLE_CLEAN_UP,
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
        articles: [],
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
      localStorage.clear();
    });

    test('should get user bookmarked articles and call view bookmark articles actions', (done) => {
      const expectedActions = [
        'VIEW_BOOKMARKED_ARTICLE_PENDING',
        'VIEW_BOOKMARKED_ARTICLE_SUCCESS'
      ];
      axiosCall.mockResolvedValue({
        data: articles,
      });
      store
        .dispatch(
          viewBookmarkedArticle()
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should send error as just response string message', (done) => {
      const expectedActions = ['VIEW_BOOKMARKED_ARTICLE_PENDING', 'VIEW_BOOKMARKED_ARTICLE_ERROR'];

      axiosCall.mockRejectedValue(
        new CustomError({ response: { message: 'Something went wrong' } })
      );
      store.dispatch(viewBookmarkedArticle()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
