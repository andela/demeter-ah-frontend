import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changePassword } from '../../reducers/initialState';
import * as actions from './index';
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
const password = {
  password: '1234qwer',
  resetToken: 'kkklljjsa'
};
jest.mock('../../../utils');

describe('CHANGE PASSWORD ACTIONS', () => {
  describe('ACTIONS', () => {
    test('passwordChangeError should return type CHANGE_PASSWORD_ERROR', () => {
      const payload = 'some errors';
      const ErrorActions = actions.passwordChangeError(payload);

      expect(ErrorActions).toEqual({ type: 'CHANGE_PASSWORD_ERROR', change: { error: payload } });
    });

    test('passwordChangeSuccess should return type CHANGE_PASSWORD_SUCCESS', () => {
      const payload = 'successful';
      const SuccessActions = actions.passwordChangeSuccess(payload);

      expect(SuccessActions).toEqual({ type: 'CHANGE_PASSWORD_SUCCESS', change: { message: payload } });
    });

    test('submitPasswordChange should return type CHANGE_PASSWORD_SUBMIT', () => {
      const submitResetAction = actions.submitPasswordChange();

      expect(submitResetAction).toEqual({ type: 'CHANGE_PASSWORD_SUBMIT' });
    });

    test('cleanUpPasswordChange should return type CHANGE_PASSWORD_CLEAN_UP', () => {
      const cleanUpAction = actions.cleanUpPasswordChange();

      expect(cleanUpAction).toEqual({ type: 'CHANGE_PASSWORD_CLEAN_UP' });
    });
  });

  describe('THUNKS', () => {
    let store;
    beforeEach(() => {
      store = mockStore(changePassword);
    });

    afterEach(() => {
      store.clearActions();
    });

    test('change password should send error as response string message', (done) => {
      const expectedActions = ['CHANGE_PASSWORD_SUBMIT', 'CHANGE_PASSWORD_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found'));
      store.dispatch(actions.changePassword(password)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('change password should send error as data response object message', (done) => {
      const expectedActions = ['CHANGE_PASSWORD_SUBMIT', 'CHANGE_PASSWORD_ERROR'];

      axiosCall.mockRejectedValue(new CustomError('User not found', 'object'));
      store.dispatch(actions.changePassword(password)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('change password should send successful message if user exist', (done) => {
      const expectedActions = ['CHANGE_PASSWORD_SUBMIT', 'CHANGE_PASSWORD_SUCCESS'];
      axiosCall.mockResolvedValue({
        message: 'Password has successfully been changed.'
      });
      store.dispatch(actions.changePassword(password)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
