import commentHistoryReducer from './index';
import { commentHistory } from '../initialState';
import * as types from '../../actions/actionTypes';

let initialState;

describe('Comment History Reducer', () => {
  beforeEach(() => {
    initialState = commentHistory;
  });


  it('should return the initial state', () => {
    expect(commentHistoryReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle COMMENT_HISTORY_SUCCESS', () => {
    expect(commentHistoryReducer(initialState, {
      type: types.COMMENT_HISTORY_SUCCESS,
      payload: {
        comments: [],
        isLoading: false,
        error: null,
        isCompleted: true,
      }
    })).toEqual(
      {
        ...initialState,
        comments: [],
        isCompleted: true,
      }
    );
  });

  it('should handle COMMENT_HISTORY_FAILURE', () => {
    expect(commentHistoryReducer(initialState, {
      type: types.COMMENT_HISTORY_FAILURE,
      payload: null,

    })).toEqual(
      {
        ...initialState,
        error: null,
      }
    );
  });

  it('should handle COMMENT_HISTORY_CLEANUP', () => {
    expect(commentHistoryReducer(initialState, {
      type: types.COMMENT_HISTORY_CLEANUP,
    })).toEqual(
      {
        ...initialState
      }
    );
  });


  it('should handle COMMENT_HISTORY_PENDING', () => {
    expect(commentHistoryReducer(initialState, {
      type: types.COMMENT_HISTORY_PENDING,
      payload: {
        isCompleted: false,
        isLoading: true,
        error: null
      }
    })).toEqual(
      {
        ...initialState,
        isCompleted: false,
        isLoading: true,
        error: null
      }
    );
  });
});
