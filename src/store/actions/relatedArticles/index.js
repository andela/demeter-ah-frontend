import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const relatedArticlesPending = () => ({
  type: types.RELATED_ARTICLES_PENDING,
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null
  }
});

export const relatedArticlesSuccess = articles => ({
  type: types.RELATED_ARTICLES_SUCCESS,
  payload: {
    isLoading: false,
    articles,
    isCompleted: true,
    error: null
  }
});
export const relatedArticlesError = error => ({
  type: types.RELATED_ARTICLES_ERROR,
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  }
});
export const cleanUpRelatedArticles = () => ({
  type: types.RELATED_ARTICLES_CLEANUP,
  payload: {
    error: {},
    isCompleted: true
  }
});


export const relatedArticlesAction = (slug, category) => async (dispatch) => {
  await dispatch(relatedArticlesPending());
  const name = category && category.name;
  try {
    const result = await axiosCall({
      path: `/api/v1/articles/${slug}/${name}/related`, method: 'get', payload: null
    });
    dispatch(relatedArticlesSuccess(result && result.articles));
  } catch (e) {
    /* istanbul ignore next */
    const { response } = e;
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    dispatch(relatedArticlesError(message));
  }
};
