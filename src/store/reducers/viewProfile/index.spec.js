import viewProfileReducer from './index';
import { viewProfile as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

describe('View Profile Reducer', () => {
  it('Should return the initial state', () => {
    expect(viewProfileReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle VIEW_PROFILE_PENDING', () => {
    expect(viewProfileReducer(
      initialState, {
        type: types.VIEW_PROFILE_PENDING,
        payload: {
          isLoading: true,
          isCompleted: false,
        }
      }
    )).toEqual({
      ...initialState,
      isLoading: true,
      isCompleted: false
    });
  });

  it('Should handle VIEW_PROFILE_SUCCESS', () => {
    expect(viewProfileReducer(
      initialState, {
        type: types.VIEW_PROFILE_SUCCESS,
        payload: {
          isLoading: false,
          isCompleted: true,
        }
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isCompleted: true
    });
  });

  it('Should handle VIEW_PROFILE_FAILURE', () => {
    expect(viewProfileReducer(
      initialState, {
        type: types.VIEW_PROFILE_FAILURE,
        payload: {
          error: 'Something went wrong',
          isCompleted: true,
          isLoading: false,
        }
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      isLoading: false,
      isCompleted: true,
    });
  });

  it('Should handle VIEW_PROFILE_CLEAN_UP', () => {
    expect(viewProfileReducer(
      initialState, {
        type: types.VIEW_PROFILE_CLEAN_UP
      }
    )).toEqual({
      ...initialState
    });
  });
});
