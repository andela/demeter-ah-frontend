import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';


export const cleanUpArticle = () => ({ type: types.ARTICLE_CLEAN_UP });

export const openPublishModal = () => ({ type: types.OPEN_PUBLISH_MODAL, openPublishModal: true });

export const draftArticle = () => ({ type: types.ARTICLE_DRAFT });

export const publishArticle = () => ({ type: types.ARTICLE_PUBLISH });

export const createArticleSuccess = message => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  resp: { message }
});

export const createArticleError = error => ({ type: types.CREATE_ARTICLE_ERROR, resp: { error } });

export const closePublishModal = () => (
  { type: types.CLOSE_PUBLISH_MODAL, openPublishModal: false }
);

export const createArticle = payload => async (dispatch) => {
  payload.publish
    ? dispatch(publishArticle(true))
    : dispatch(draftArticle(true));

  payload.body = JSON.stringify(payload.body);
  payload.tags = payload.tags.join(',');

  try {
    const result = await axiosCall({ path: '/api/v1/articles', payload, method: 'post' });
    dispatch(createArticleSuccess(result.message));
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message) || response || 'an error occured';
    /* istanbul ignore next */
    dispatch(createArticleError(error));
  }
};
