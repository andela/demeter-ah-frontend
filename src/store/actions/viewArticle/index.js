import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const viewArticlePending = () => ({
  type: types.VIEW_ARTICLE_PENDING,
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null
  }
});

export const viewArticleSuccess = article => ({
  type: types.VIEW_ARTICLE_SUCCESS,
  payload: {
    isLoading: false,
    article,
    isCompleted: true,
    error: null,
  }
});
export const viewArticleError = error => ({
  type: types.VIEW_ARTICLE_ERROR,
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  }
});
export const cleanUpArticle = () => ({
  type: types.VIEW_ARTICLE_CLEANUP,
  payload: {
    error: null,
    isCompleted: false
  }
});


export const viewArticleAction = slug => async (dispatch) => {
  await dispatch(viewArticlePending());
  try {
    const result = await axiosCall({
      path: `/api/v1/articles/${slug}`, method: 'get', payload: null
    });
    dispatch(viewArticleSuccess(result.article));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message);
    /* istanbul ignore next */
    dispatch(viewArticleError(error));
  }
};
