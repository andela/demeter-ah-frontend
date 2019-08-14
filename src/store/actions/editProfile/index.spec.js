import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { axiosCall } from '../../../utils';
import {
  editProfileCleanUp,
  editProfile,
  editProfileSuccess,
  editProfileError,
  updateProfile,
  setProfileImage,
} from './index';
import * as types from '../actionTypes';

let history;

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
  password: '12345678',
};
const token = 'edfkdnfdfnkmdf.fnjngjrtnsnbcdhdbsqebsxmvfl';

describe('EDIT PROFILE ACTIONS', () => {
  describe('actions', () => {
    test('updateProfile should return EDIT_PROFILE_SUBMIT', () => {
      const updateProfileAction = updateProfile();
      expect(updateProfileAction).toEqual({
        type: types.EDIT_PROFILE_SUBMIT,
      });
    });

    test('editProfileSuccess should return EDIT_PROFILE_SUCCESS', () => {
      const editProfileSuccessAction = editProfileSuccess(user);
      expect(editProfileSuccessAction).toEqual({
        type: types.EDIT_PROFILE_SUCCESS,
        payload: {
          isCompleted: true,
          isLoading: false,
        },
      });
    });

    test('editProfileError should return EDIT_PROFILE_ERROR', () => {
      const payload = 'Something went wrong';
      const editProfileSuccessAction = editProfileError(payload);
      expect(editProfileSuccessAction).toEqual({
        type: types.EDIT_PROFILE_ERROR,
        payload,
      });
    });

    test('editProfileCleanUp should return EDIT_PROFILE_CLEAN_UP', () => {
      const editProfileCLeanUpAction = editProfileCleanUp();
      expect(editProfileCLeanUpAction).toEqual({
        type: types.EDIT_PROFILE_CLEAN_UP,
      });
    });
  });

  describe('Edit Profile', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        user: {},
        error: null,
        isLoading: false,
        isCompleted: false,
      });
      history = createBrowserHistory();
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
      localStorage.clear();
    });

    test('should edit user and call edit user actions', (done) => {
      const expectedActions = [
        'EDIT_PROFILE_SUBMIT',
        'SETUP_USER',
        'VIEW_PROFILE_SUCCESS',
        'EDIT_PROFILE_SUCCESS',
      ];
      axiosCall.mockResolvedValue({
        data: user,
      });
      store
        .dispatch(
          editProfile({ values: user }, user.username, history)
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should send error as just response string message', (done) => {
      const expectedActions = ['EDIT_PROFILE_SUBMIT', 'EDIT_PROFILE_ERROR'];

      axiosCall.mockRejectedValue(
        new CustomError({ response: { message: 'User not found' } })
      );
      store.dispatch(editProfile(user, token)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });

    test('should dispatch action to set image', (done) => {
      const expectedActions = ['SAVE_LOCAL_IMAGE'];
      store.dispatch(setProfileImage('randomstr')).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
