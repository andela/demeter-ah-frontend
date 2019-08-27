import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const bookmarkArticlePending = () => ({
  type: types.BOOKMARK_ARTICLE_PENDING
});

export const bookmarkArticleSuccess = () => ({
  type: types.BOOKMARK_ARTICLE_SUCCESS
});

export const bookmarkArticleError = error => ({
  type: types.BOOKMARK_ARTICLE_ERROR,
  payload: error
});

export const bookmarkArticleCleanUp = () => ({
  type: types.BOOKMARK_ARTICLE_CLEAN_UP
});

export const bookmarkArticle = slug => async (dispatch) => {
  dispatch(bookmarkArticlePending());
  try {
    await axiosCall({
      method: 'post',
      path: `/api/v1/articles/bookmark/${slug}`,
    });
    dispatch(bookmarkArticleSuccess());
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = response ? response.data.message : err.message;
    dispatch(bookmarkArticleError(error));
  }
};
