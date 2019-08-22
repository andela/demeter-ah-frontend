import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const viewBookmarkPending = () => ({ type: types.VIEW_BOOKMARKED_ARTICLE_PENDING });

export const viewBookmarkSuccess = articles => ({
  type: types.VIEW_BOOKMARKED_ARTICLE_SUCCESS,
  payload: articles
});

export const viewBookmarkError = error => ({
  type: types.VIEW_BOOKMARKED_ARTICLE_ERROR,
  payload: error
});

export const viewBookmarkCleanUp = () => ({
  type: types.VIEW_BOOKMARKED_ARTICLE_CLEAN_UP
});

export const viewBookmarkedArticle = () => async (dispatch) => {
  dispatch(viewBookmarkPending());

  try {
    const data = await axiosCall({
      method: 'get',
      path: '/api/v1/articles/bookmark/user'
    });
    const { articles } = data;
    dispatch(viewBookmarkSuccess(articles));
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = response ? response.data.message : err.message;
    dispatch(viewBookmarkError(error));
  }
};
