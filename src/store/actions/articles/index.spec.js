import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import {
  cleanUpArticle, openPublishModal, draftArticle, publishArticle,
  createArticleSuccess, createArticleError, closePublishModal,
  createArticle, getCategories
} from './index';
import { axiosCall } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

describe('ARTICLE ACTIONS', () => {
  describe('Actions', () => {
    test('cleanUpArticle', () => {
      const cleanUpArticleAction = cleanUpArticle();

      expect(cleanUpArticleAction).toEqual({
        type: 'ARTICLE_CLEAN_UP'
      });
    });

    test('openPublishModal', () => {
      const openPublishModalActions = openPublishModal();

      expect(openPublishModalActions).toEqual({
        type: 'OPEN_PUBLISH_MODAL',
        openPublishModal: true
      });
    });

    test('draftArticle', () => {
      const draftArticleActions = draftArticle();

      expect(draftArticleActions).toEqual({
        type: 'ARTICLE_DRAFT',
      });
    });

    test('publishArticle', () => {
      const publishArticleActions = publishArticle();

      expect(publishArticleActions).toEqual({
        type: 'ARTICLE_PUBLISH',
      });
    });

    test('createArticleSuccess', () => {
      const success = 'success';
      const createArticleSuccessAction = createArticleSuccess(success);

      expect(createArticleSuccessAction).toEqual({
        type: 'CREATE_ARTICLE_SUCCESS',
        resp: { message: 'success' }
      });
    });

    test('createArticleError', () => {
      const error = 'error';
      const createArticleErrorAction = createArticleError(error);

      expect(createArticleErrorAction).toEqual({
        type: 'CREATE_ARTICLE_ERROR',
        resp: { error: 'error' }
      });
    });

    test('closePublishModal', () => {
      const closePublishModalAction = closePublishModal();

      expect(closePublishModalAction).toEqual({
        type: 'CLOSE_PUBLISH_MODAL',
        openPublishModal: false
      });
    });
  });

  describe('CREATE ARTICLE ACtions', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        openPublishModal: false,
        isSubmitting: false,
        response: {},
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
    });

    test('createArticle publish', (done) => {
      const expectedActions = ['ARTICLE_PUBLISH', 'CREATE_ARTICLE_SUCCESS'];
      axiosCall.mockResolvedValue({
        data: {
          message: 'article created successfully'
        }
      });
      const payload = {
        publish: true,
        body: {
          paragraph: 'some',
          img: 'htt://me.com'
        },
        tags: ['some'],
      };

      store.dispatch(createArticle(payload)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('createArticle draft', (done) => {
      const expectedActions = ['ARTICLE_DRAFT', 'CREATE_ARTICLE_SUCCESS'];
      axiosCall.mockResolvedValue({
        data: {
          message: 'article created successfully'
        }
      });
      const payload = {
        publish: false,
        body: {
          paragraph: 'some',
          img: 'htt://me.com'
        },
        tags: ['some'],
      };

      store.dispatch(createArticle(payload)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('createArticle publish fails and throws error', (done) => {
      const expectedActions = ['ARTICLE_PUBLISH', 'CREATE_ARTICLE_ERROR'];
      axiosCall.mockResolvedValue({
        data: {
          error: 'error occured'
        }
      });
      const payload = {
        publish: false,
        response: {
          data: {
            message: 'bad error'
          },
          paragraph: 'some',
          img: 'htt://me.com'
        },
        tags: ['some'],
      };

      store.dispatch(createArticle(payload)).catch(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('getCategories', async () => {
      const data = [
        {
          id: 1,
          name: 'others',
        },
        {
          id: 2,
          name: 'programming',
        },
      ];
      axiosCall.mockResolvedValue({
        data,
      });
      const r = await getCategories()();
      expect(r.data).toEqual(data);
    });
  });
});
