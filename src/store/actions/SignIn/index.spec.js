import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import {
  signInPending, signInAction, signInSuccess, signInError, cleanUpAuth, socialSignInAction
} from './index';
import { axiosCall } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const user = {
  firstName: 'ewere',
  lastName: 'hamzah',
  username: 'vinay',
  email: 'kelvin@ah.com',
  password: '12345678'
};

const token = 'qwertyuiopoiuytrewqwertyuioiuytrewertyuiowertet';
jest.mock('../../../utils');

describe('Sign In', () => {
  describe('The Actions', () => {
    test('signInPending should return type SIGNIN_PENDING', () => {
      const payload = {
        error: null,
        isCompleted: false,
        isLoading: true,
      };
      const signInPendingActions = signInPending(payload);

      expect(signInPendingActions).toEqual({ type: 'SIGNIN_PENDING', payload });
    });

    test('signInError should return type SIGNIN_ERROR', () => {
      const payload = {
        error: 'error',
        isCompleted: true,
        isLoading: false,
      };
      const signinErrorActions = signInError('error');

      expect(signinErrorActions).toEqual({ type: 'SIGNIN_ERROR', payload });
    });

    test('signInSuccess should return type SIGNIN_SUCCESS', () => {
      const payload = {
        email: 'me@you.com',
        password: 'easylife',
      };
      const signupErrorActions = signInSuccess(payload);

      expect(signupErrorActions).toEqual({
        type: 'SIGNIN_SUCCESS',
        payload: {
          isLoading: false,
          isCompleted: true,
          isAuthenticated: true,
          user: {
            email: 'me@you.com',
            password: 'easylife',
          }
        }
      });
    });

    test('cleanUpAuth should return type CLEAN_UP', () => {
      const cleanUpAuthAction = cleanUpAuth();

      expect(cleanUpAuthAction).toEqual({
        type: 'CLEAN_UP',
        payload: {
          error: null,
          isCompleted: false
        }
      });
    });
  });

  describe('User SignIn', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        error: null,
        user: {},
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
        user: {
          token,
          ...user
        }
      });
      store.dispatch(signInAction(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('social sign in user and call social sign in actions', (done) => {
      const expectedActions = [];
      axiosCall.mockResolvedValue({
        user: {
          token,
          ...user
        }
      });
      store.dispatch(socialSignInAction(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
