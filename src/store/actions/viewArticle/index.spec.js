import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '../../../utils';
import {
  viewArticlePending, viewArticleError, viewArticleSuccess, viewArticleAction
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
const article = {
  id: 2,
  description: 'good code',
  body: 'It is a long established fact that a reader',
  title: 'Creating and Executing marketing Strategies',
  readTime: 'Less than a minute',
  categoryId: 1,
  publish: true,
  authorId: 1,
  slug: 'creating-and-executing-marketing-strategies',
  image: null,
  flagged: false,
  reads: 0,
  rating: null,
  author: {},
  tagList: []
};

describe('VIEW ARTICLE ACTIONS', () => {
  describe('The Actions', () => {
    test('article pending should return VIEW_ARTICLE_PENDING', () => {
      const viewArticlePendingAction = viewArticlePending();
      expect(viewArticlePendingAction).toEqual({
        type: types.VIEW_ARTICLE_PENDING,
        payload: {
          isLoading: true,
          isCompleted: false,
          error: null,
        }
      });
    });

    test('viewArticleSuccess should return VIEW_ARTICLE_SUCCESS', () => {
      const viewArticleSuccessAction = viewArticleSuccess(article);
      expect(viewArticleSuccessAction).toEqual({
        type: types.VIEW_ARTICLE_SUCCESS,
        payload: {
          article,
          isLoading: false,
          error: null,
          isCompleted: true,
        }
      });
    });

    test('viewArticleError should return VIEW_ARTICLE_ERROR', () => {
      const error = 'Something went wrong';
      const viewArticleErrorAction = viewArticleError(error);
      expect(viewArticleErrorAction).toEqual({
        type: types.VIEW_ARTICLE_ERROR,
        payload: {
          isLoading: false,
          isCompleted: false,
          error,
        }
      });
    });
  });

  describe('Get Article', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        article: {},
        error: null,
        isLoading: false,
        isCompleted: false,
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
    });

    test('Should get the data of an article', (done) => {
      const expectedActions = ['VIEW_ARTICLE_PENDING', 'VIEW_ARTICLE_SUCCESS'];
      axiosCall.mockResolvedValue({
        data: article
      });
      store.dispatch(viewArticleAction(article.slug)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('Should send error as just response string message', (done) => {
      const expectedActions = ['VIEW_ARTICLE_PENDING', 'VIEW_ARTICLE_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('Article not found'));
      store.dispatch(viewArticleAction(article)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
