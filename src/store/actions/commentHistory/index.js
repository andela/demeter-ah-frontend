import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const commentHistoryPending = () => ({
  type: types.COMMENT_HISTORY_PENDING,
  payload: {
    isLoading: true,
    isCompleted: false,
    error: null,
  },
});

export const commentHistorySuccess = comments => ({
  type: types.COMMENT_HISTORY_SUCCESS,
  payload: {
    comments,
    isLoading: false,
    error: null,
    isCompleted: true,
  },
});

export const commentHistoryFailure = error => ({
  type: types.COMMENT_HISTORY_FAILURE,
  payload: {
    isLoading: false,
    error,
  },
});

export const commentHistoryCleanUp = () => ({
  type: types.COMMENT_HISTORY_CLEANUP,
});

export const getCommentHistory = (slug, commentId) => async (dispatch) => {
  try {
    dispatch(commentHistoryCleanUp());
    const result = await axiosCall({
      method: 'get',
      path: `/api/v1/articles/${slug}/comments/${commentId}/history`,
    });
    dispatch(commentHistorySuccess(result.commentHistory));
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(commentHistoryFailure(error));
  }
};
