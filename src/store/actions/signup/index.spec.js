import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import {
  signUpAction, signUpError, setUpUser, signUpSuccess, signUp, cleanUpAuth, getUser
} from './index';
import { axiosCall } from '../../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const user = {
  firstName: 'frank',
  lastName: 'angle',
  username: 'agnfr',
  email: 'frank@me.com',
  password: '12345678'
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';
jest.mock('../../../utils');

describe('Sign up Actions', () => {
  describe('actions', () => {
    test('signUpError should return type SIGNUP_ERROR', () => {
      const payload = ['some errors'];
      const signupErrorActions = signUpError(payload);

      expect(signupErrorActions).toEqual({ type: 'SIGNUP_ERROR', payload });
    });

    test('setUpUser should return type SETUP_USER', () => {
      const payload = { user: { name: 'frank' } };
      const setUpUserActions = setUpUser(payload);

      expect(setUpUserActions).toEqual({ type: 'SETUP_USER', payload });
    });

    test('setUpUser should return type SETUP_USER', () => {
      const payload = { user: { name: 'frank' } };
      const setUpUserActions = setUpUser(payload);

      expect(setUpUserActions).toEqual({ type: 'SETUP_USER', payload });
    });

    test('signUpSuccess should return type SIGNUP_SUCCESS', () => {
      const payload = 'frank';
      const signUpSuccessAction = signUpSuccess(payload);

      expect(signUpSuccessAction).toEqual({ type: 'SIGNUP_SUCCESS', payload: { user: 'frank', isCompleted: true, isAuthenticated: true } });
    });

    test('signUp should return type SIGNUP', () => {
      const setsignUpsubmit = signUp();

      expect(setsignUpsubmit).toEqual({ type: 'SIGNUP', payload: { isSubmit: true } });
    });

    test('cleanUpAuth should return type CLEAN_UP', () => {
      const cleanUpAuthAction = cleanUpAuth();

      expect(cleanUpAuthAction).toEqual({ type: 'CLEAN_UP' });
    });
  });

  describe('Auth Action', () => {
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

    test('should sign up user and call sign up actions', (done) => {
      const expectedActions = ['CLEAN_UP', 'SIGNUP', 'SIGNUP_SUCCESS'];
      axiosCall.mockResolvedValue({
        user: {
          token,
          ...user
        }
      });
      store.dispatch(signUpAction(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should set user if token exist and app is reloaded', () => {
      const expectedActions = ['SETUP_USER'];
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      store.dispatch(getUser());
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
