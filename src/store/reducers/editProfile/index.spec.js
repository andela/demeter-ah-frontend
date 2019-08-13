import editProfileReducer from './index';
import { editProfile as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

describe('Edit Profile Reducer', () => {
  it('Should return the initial state', () => {
    expect(editProfileReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle EDIT_PROFILE_SUUBMIT', () => {
    expect(editProfileReducer(
      initialState, {
        type: types.EDIT_PROFILE_SUBMIT
      }
    )).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('Should handle EDIT_PROFILE_SUCCESS', () => {
    expect(editProfileReducer(
      initialState, {
        type: types.EDIT_PROFILE_SUCCESS,
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

  it('Should handle EDIT_PROFILE_ERROR', () => {
    expect(editProfileReducer(
      initialState, {
        type: types.EDIT_PROFILE_ERROR,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      isLoading: false
    });
  });

  it('Should handle EDIT_PROFILE_CLEAN_UP', () => {
    expect(editProfileReducer(
      initialState, {
        type: types.EDIT_PROFILE_CLEAN_UP
      }
    )).toEqual({
      ...initialState
    });
  });
});
