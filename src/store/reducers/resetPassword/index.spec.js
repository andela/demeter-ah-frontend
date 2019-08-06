import { resetPassword as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';
import resetPasswordReducer from './index';

describe('RESET PASSWORD REDUCER', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RESET_SUCCESS', () => {
    expect(resetPasswordReducer(initialState, {
      type: types.RESET_SUCCESS,
      reset: {
        message: 'check your mail for reset link'
      }
    })).toEqual(
      {
        response: {
          message: 'check your mail for reset link'
        },
        isSubmitting: false,
      }
    );
  });

  it('should handle RESET_ERROR', () => {
    expect(resetPasswordReducer(initialState, {
      type: types.RESET_ERROR,
      reset: {
        error: 'user does not exist'
      }
    })).toEqual(
      {
        ...initialState,
        response: { error: 'user does not exist' },
      }
    );
  });

  it('should handle RESET_CLEAN_UP', () => {
    expect(resetPasswordReducer(initialState, {
      type: types.RESET_CLEAN_UP,
    })).toEqual(
      {
        ...initialState
      }
    );
  });

  it('should handle RESET_SUBMIT', () => {
    expect(resetPasswordReducer(initialState, {
      type: types.RESET_SUBMIT,
      reset: {
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
