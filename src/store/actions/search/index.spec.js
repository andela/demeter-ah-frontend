import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '../../../utils';
import {
  searchPending, searchSuccess, searchError, searchCleanUp, searchAction
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
const articles = [{
  id: 1,
  title: 'React',
  description: 'Progrm=amming in react'
}];

describe('EDIT PROFILE ACTIONS', () => {
  describe('search pending actions', () => {
    test('searhPending should return SEARCH_PENDING', () => {
      const searchPendingAction = searchPending('react');
      expect(searchPendingAction).toEqual({
        type: types.SEARCH_PENDING,
        payload: 'react'
      });
    });

    test('searchSuccess should return SEARCH_SUCCESS', () => {
      const searchSuccessAction = searchSuccess(articles);
      expect(searchSuccessAction).toEqual({
        type: types.SEARCH_SUCCESS,
        payload: articles
      });
    });

    test('searchError should return SEARCH_ERROR', () => {
      const payload = 'Something went wrong';
      const searchErrorAction = searchError(payload);
      expect(searchErrorAction).toEqual({
        type: types.SEARCH_ERROR,
        payload,
      });
    });

    test('searchCleanUp should return SEARCH_CLEAN_UP', () => {
      const searchCleanUpAction = searchCleanUp();
      expect(searchCleanUpAction).toEqual({
        type: types.SEARCH_CLEAN_UP,
      });
    });
  });

  describe('Search Article', () => {
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
      localStorage.clear();
    });

    test('should search articles and call search actions', (done) => {
      const expectedActions = [
        'SEARCH_PENDING',
        'SEARCH_SUCCESS',
      ];
      axiosCall.mockResolvedValue({
        data: articles,
      });
      store
        .dispatch(
          searchAction({ title: 'react' })
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should send error as just response string message', (done) => {
      const expectedActions = ['SEARCH_PENDING', 'SEARCH_ERROR'];

      axiosCall.mockRejectedValue(
        new CustomError({ response: { message: 'User not found' } })
      );
      store.dispatch(searchAction({ title: 'react' })).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
