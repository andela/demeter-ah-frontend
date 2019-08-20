import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '../../../utils';
import {
  relatedArticlesPending, relatedArticlesError, relatedArticlesSuccess, relatedArticlesAction
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
const articles = {
  id: 2,
  description: 'good code',
  body: 'It is a long established fact that a reader',
  title: 'Creating and Executing marketing Strategies',
  readTime: 'Less than a minute',
  category: 'tech',
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

describe('RELATED ARTICLES ACTIONS', () => {
  describe('The Actions', () => {
    test('relatedArticlesPending should return RELATED_ARTICLES_PENDING', () => {
      const relatedArticlesPendingAction = relatedArticlesPending();
      expect(relatedArticlesPendingAction).toEqual({
        type: types.RELATED_ARTICLES_PENDING,
        payload: {
          isLoading: true,
          isCompleted: false,
          error: null,
        }
      });
    });

    test('relatedArticlesSuccess should return RELATED_ARTICLES_SUCCESS', () => {
      const relatedArticlesSuccessAction = relatedArticlesSuccess(articles);
      expect(relatedArticlesSuccessAction).toEqual({
        type: types.RELATED_ARTICLES_SUCCESS,
        payload: {
          articles,
          isLoading: false,
          error: null,
          isCompleted: true,
        }
      });
    });

    test('relatedArticlesError should return RELATED_ARTICLES_ERROR', () => {
      const error = 'Something went wrong';
      const relatedArticlesErrorAction = relatedArticlesError(error);
      expect(relatedArticlesErrorAction).toEqual({
        type: types.RELATED_ARTICLES_ERROR,
        payload: {
          isLoading: false,
          isCompleted: false,
          error,
        }
      });
    });
  });

  describe('Get Related Articles', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        articles: {},
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
      const expectedActions = ['RELATED_ARTICLES_PENDING', 'RELATED_ARTICLES_SUCCESS'];
      axiosCall.mockResolvedValue({
        data: articles
      });
      store.dispatch(relatedArticlesAction(articles.slug, articles.category)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('Should send error as just response string message', (done) => {
      const expectedActions = ['RELATED_ARTICLES_PENDING', 'RELATED_ARTICLES_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('Article not found'));
      store.dispatch(relatedArticlesAction(articles.slug, articles.category)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
