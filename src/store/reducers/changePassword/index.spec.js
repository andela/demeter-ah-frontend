import { changePassword as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';
import changePasswordReducer from './index';

describe('CHANGE PASSWORD REDUCER', () => {
  it('should return the initial state', () => {
    expect(changePasswordReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_PASSWORD_SUCCESS', () => {
    expect(changePasswordReducer(initialState, {
      type: types.CHANGE_PASSWORD_SUCCESS,
      change: {
        message: 'password changed successfully'
      }
    })).toEqual(
      {
        response: {
          message: 'password changed successfully'
        },
        isSubmitting: false,
      }
    );
  });

  it('should handle CHANGE_PASSWORD_ERROR', () => {
    expect(changePasswordReducer(initialState, {
      type: types.CHANGE_PASSWORD_ERROR,
      change: {
        error: 'user does not exist'
      }
    })).toEqual(
      {
        ...initialState,
        response: { error: 'user does not exist' },
      }
    );
  });

  it('should handle CHANGE_PASSWORD_CLEAN_UP', () => {
    expect(changePasswordReducer(initialState, {
      type: types.CHANGE_PASSWORD_CLEAN_UP,
    })).toEqual(
      {
        ...initialState
      }
    );
  });

  it('should handle CHANGE_PASSWORD_SUBMIT', () => {
    expect(changePasswordReducer(initialState, {
      type: types.CHANGE_PASSWORD_SUBMIT,
      change: {
        ...initialState,
        isSubmitting: true
      }
    })).toEqual(
      {
        ...initialState,
        isSubmitting: true
      }
    );
  });
});
