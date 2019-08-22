import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const commentPending = () => ({
  type: types.COMMENT_PENDING,
  payload: {
    isLoading: true,
    isCompleted: false,
    error: null,
  },
});

export const commentSuccess = comments => ({
  type: types.COMMENT_SUCCESS,
  payload: {
    comments,
    isLoading: false,
    error: null,
    isCompleted: true,
  },
});

export const commentFailure = error => ({
  type: types.COMMENT_FAILURE,
  payload: {
    isLoading: false,
    error,
  },
});

export const commentCleanUp = () => ({
  type: types.COMMENT_CLEANUP,
});

export const getComments = slug => async (dispatch) => {
  try {
    const result = await axiosCall({
      method: 'get',
      path: `/api/v1/articles/${slug}/comments`,
    });
    dispatch(commentSuccess(result.comments));
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(commentFailure(error));
  }
};

export const postComment = ({ slug, content }) => async (dispatch) => {
  try {
    const result = await axiosCall({
      method: 'post',
      payload: content,
      path: `/api/v1/articles/${slug}/comments`,
    });
    dispatch(commentSuccess(result.user));
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(commentFailure(error));
  }
};

export const updateComment = ({ slug, content, id }) => async (dispatch) => {
  dispatch(commentPending());
  try {
    const result = await axiosCall({
      method: 'patch',
      payload: content,
      path: `/api/v1/articles/${slug}/comments/${id}`,
    });
    dispatch(commentSuccess(result.user));
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(commentFailure(error));
  }
};


export const voteComment = ({ status, commentId }) => async (dispatch) => {
  try {
    await axiosCall({
      method: 'post',
      payload: { status },
      path: `/api/v1/articles/comment/vote/${commentId}`,
    });
  } catch (err) {
    const { response } = err;
    const error = (response
      && response.data
      && (response.data.message || response.data.error))
      || err.message;
    dispatch(commentFailure(error));
  }
};
