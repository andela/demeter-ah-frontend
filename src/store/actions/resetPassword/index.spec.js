import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { resetPassword } from '../../reducers/initialState';
import {
  cleanUpReset, resetError, resetSuccess, sendResetLink, submitReset
} from './index';
import { axiosCall } from '../../../utils';

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
const user = {
  email: 'frank@me.com'
};
jest.mock('../../../utils');

describe('RESET ACTIONS', () => {
  describe('actions', () => {
    test('resetError should return type RESET_ERROR', () => {
      const payload = 'some errors';
      const resetErrorActions = resetError(payload);

      expect(resetErrorActions).toEqual({ type: 'RESET_ERROR', reset: { error: payload } });
    });

    test('resetSuccess should return type RESET_SUCCESS', () => {
      const payload = 'successful';
      const resetSuccessActions = resetSuccess(payload);

      expect(resetSuccessActions).toEqual({ type: 'RESET_SUCCESS', reset: { message: payload } });
    });

    test('submitReset should return type RESET_SUBMIT', () => {
      const submitResetAction = submitReset();

      expect(submitResetAction).toEqual({ type: 'RESET_SUBMIT' });
    });

    test('cleanUpReset should return type RESET_CLEAN_UP', () => {
      const cleanUpResetAction = cleanUpReset();

      expect(cleanUpResetAction).toEqual({ type: 'RESET_CLEAN_UP' });
    });
  });

  describe('thunk', () => {
    let store;
    beforeEach(() => {
      store = mockStore(resetPassword);
    });

    afterEach(() => {
      store.clearActions();
    });

    test('reset password should send error as just response string message', (done) => {
      const expectedActions = ['RESET_SUBMIT', 'RESET_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found'));
      store.dispatch(sendResetLink(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('reset password should send error as data response object message', (done) => {
      const expectedActions = ['RESET_SUBMIT', 'RESET_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found', 'object'));
      store.dispatch(sendResetLink(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('reset password should send successful message if user exist', (done) => {
      const expectedActions = ['RESET_SUBMIT', 'RESET_SUCCESS'];
      axiosCall.mockResolvedValue({
        message: 'reset sent successfully'
      });
      store.dispatch(sendResetLink(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
