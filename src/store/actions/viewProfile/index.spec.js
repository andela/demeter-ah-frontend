import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '../../../utils';
import {
  profileFailure, profilePending, profileSuccess, setViewedUser, getViewedUser
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
const user = {
  firstName: 'frank',
  lastName: 'angle',
  username: 'agnfr',
  email: 'frank@me.com',
  password: '12345678'
};

describe('VIEW PROFILE ACTIONS', () => {
  describe('actions', () => {
    test('profile pending should return VIEW_PROFILE_PENDING', () => {
      const profilePendingAction = profilePending();
      expect(profilePendingAction).toEqual({
        type: types.VIEW_PROFILE_PENDING,
        payload: {
          isLoading: true,
          isCompleted: false,
          error: null,
        }
      });
    });

    test('profileSuccess should return VIEW_PROFILE_SUCCESS', () => {
      const profileSuccessAction = profileSuccess(user);
      expect(profileSuccessAction).toEqual({
        type: types.VIEW_PROFILE_SUCCESS,
        payload: {
          user,
          isLoading: false,
          error: null,
          isCompleted: true,
        }
      });
    });

    test('profileFailure should return VIEW_PROFILE_ERROR', () => {
      const error = 'Something went wrong';
      const profileFailureAction = profileFailure(error);
      expect(profileFailureAction).toEqual({
        type: types.VIEW_PROFILE_FAILURE,
        payload: {
          isLoading: false,
          error,
        }
      });
    });
  });

  describe('Get Profile', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        user: {},
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

    test('should get the info of a user', (done) => {
      const expectedActions = ['VIEW_PROFILE_PENDING', 'VIEW_PROFILE_SUCCESS'];
      axiosCall.mockResolvedValue({
        data: user
      });
      store.dispatch(getViewedUser(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should send error as just response string message', (done) => {
      const expectedActions = ['VIEW_PROFILE_PENDING', 'VIEW_PROFILE_FAILURE'];

      axiosCall.mockRejectedValue(new CustomError('User not found'));
      store.dispatch(getViewedUser(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should dispatch an action to set a user', (done) => {
      const expectedActions = ['VIEW_PROFILE_SUCCESS'];
      store.dispatch(setViewedUser(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
