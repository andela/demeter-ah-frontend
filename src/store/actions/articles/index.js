import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';


export const cleanUpArticle = () => ({ type: types.ARTICLE_CLEAN_UP });

export const openPublishModal = () => ({ type: types.OPEN_PUBLISH_MODAL, openPublishModal: true });

export const draftArticle = () => ({ type: types.ARTICLE_DRAFT });

export const publishArticle = () => ({ type: types.ARTICLE_PUBLISH });


export const setUsernameArticle = payload => ({ type: types.SET_USERNAME_ARTICLES, payload });

export const createArticleSuccess = ({ message, slug }) => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  resp: { message, slug }
});

export const createArticleError = error => ({ type: types.CREATE_ARTICLE_ERROR, resp: { error } });

export const closePublishModal = () => (
  { type: types.CLOSE_PUBLISH_MODAL, openPublishModal: false }
);

export const getCategories = () => async () => {
  try {
    const result = await axiosCall({
      path: '/api/v1/category', method: 'get', payload: null
    });
    return result;
  } catch (err) {
    /* istanbul ignore next */
    // eslint-disable-next-line no-unused-vars
    const { response } = err;
    /* istanbul ignore next */
  }
};

export const createArticle = payload => async (dispatch) => {
  payload.publish
    ? dispatch(publishArticle(true))
    : dispatch(draftArticle(true));

  payload.body = JSON.stringify(payload.body);
  payload.tags = payload.tags.join(',');
  const ArticlePayload = new FormData();
  Object.keys(payload).map(async (key) => {
    ArticlePayload.append(key, payload[key]);
  });

  try {
    const result = await axiosCall({
      path: '/api/v1/articles', payload: ArticlePayload, method: 'post', contentType: 'multipart/form-data'
    });

    dispatch(createArticleSuccess({ message: result.message, slug: result.article.slug }));
  } catch (err) {
    /* istanbul ignore next */
    const { response } = err;
    /* istanbul ignore next */
    const error = (response && response.data && response.data.message) || response || 'an error occured';
    /* istanbul ignore next */
    dispatch(createArticleError(error));
  }
};

export const getAuthorArticle = username => async (dispatch) => {
  try {
    const result = await axiosCall({
      path: `/api/v1/articles/user/${username}`, method: 'get'
    });
    const { articles } = result.articles && result;
    dispatch(setUsernameArticle(articles));
  } catch (error) {
    const { response } = error;
    dispatch(setUsernameArticle([]));
    const message = 'something went wrong';
    throw (response.data && response.data.message) || message;
  }
};
