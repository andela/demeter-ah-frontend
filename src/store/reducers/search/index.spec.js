import searchReducer from './index';
import { searchInitialState as initialState } from '../initialState';
import * as types from '../../actions/actionTypes';

describe('Search Reducer', () => {
  const articles = [{
    id: 1,
    title: 'React',
    description: 'Progrm=amming in react'
  }];

  it('Should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle SEARCH_PENDING', () => {
    expect(searchReducer(
      initialState, {
        type: types.SEARCH_PENDING
      }
    )).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('Should handle EDIT_PROFILE_SUCCESS', () => {
    expect(searchReducer(
      initialState, {
        type: types.SEARCH_SUCCESS,
        payload: articles
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isCompleted: true,
      articles
    });
  });

  it('Should handle SEARCH_ERROR', () => {
    expect(searchReducer(
      initialState, {
        type: types.SEARCH_ERROR,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      isLoading: false
    });
  });

  it('Should handle SEARCH_CLEAN_UP', () => {
    expect(searchReducer(
      initialState, {
        type: types.SEARCH_CLEAN_UP
      }
    )).toEqual({
      ...initialState
    });
  });
});
