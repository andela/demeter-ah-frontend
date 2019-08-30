
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import {
  commentHistoryPending,
  commentHistorySuccess,
  commentHistoryFailure,
  commentHistoryCleanUp,
  getCommentHistory
} from './index';
import { axiosCall } from '../../../utils';
import * as types from '../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const commentId = 1;
const slug = 'some-slug';
const comment = {};

jest.mock('../../../utils');

describe('Sign In', () => {
  describe('The Actions', () => {
    test('commentHistoryPending should return type COMMENT_HISTORY_PENDING', () => {
      const payload = {
        error: null,
        isCompleted: false,
        isLoading: true,
      };
      const commentHistoryPendingActions = commentHistoryPending(payload);
      expect(commentHistoryPendingActions).toEqual({
        type: types.COMMENT_HISTORY_PENDING,
        payload
      });
    });

    test('commentHistoryFailure should return type COMMENT_HISTORY_FAILURE', () => {
      const payload = {
        error: 'error',
        isLoading: false,
      };
      const commentHistoryFailureActions = commentHistoryFailure('error');
      expect(commentHistoryFailureActions).toEqual({
        type: types.COMMENT_HISTORY_FAILURE,
        payload
      });
    });

    test('commentHistorySuccess should return type COMMENT_HISTORY_SUCCESS', () => {
      const commentHistorySuccessAction = commentHistorySuccess(comment);

      expect(commentHistorySuccessAction).toEqual({
        type: types.COMMENT_HISTORY_SUCCESS,
        payload: {
          comments: {},
          error: null,
          isCompleted: true,
          isLoading: false,
        }
      });
    });

    test('commentHistoryCleanUp should return type COMMENT_HISTORY_CLEANUP', () => {
      const cleanUpAuthAction = commentHistoryCleanUp();

      expect(cleanUpAuthAction).toEqual({
        type: types.COMMENT_HISTORY_CLEANUP,
      });
    });
  });

  describe('Comment History', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        error: null,
        comments: [],
        isAuthenticated: false,
        isCompleted: false,
        isSubmit: false,
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
      localStorage.clear();
    });

    test('should sign in user and call sign in actions', (done) => {
      const expectedActions = [];
      axiosCall.mockResolvedValue({
        comments: []
      });
      store.dispatch(getCommentHistory(slug, commentId)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
