import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const voteArticleSuccess = vote => ({
  type: types.VOTE_ARTICLE_SUCCESS,
  vote,
});

export const voteArticleError = error => ({ type: types.VOTE_ARTICLE_ERROR, error });

export const voteArticle = ({ slug, status }) => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: `/api/v1/articles/vote/${slug}`,
      payload: { status },
      method: 'post'
    });

    dispatch(voteArticleSuccess(result));
  } catch (err) {
    const { response } = err;
    const error = response.data.message || response;
    dispatch(voteArticleError(error));
  }
};
