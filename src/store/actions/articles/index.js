import * as types from '../actionTypes';

export const openPublishModal = () => ({ type: types.OPEN_PUBLISH_MODAL, openPublishModal: true });
export const closePublishModal = () => (
  { type: types.CLOSE_PUBLISH_MODAL, openPublishModal: false }
);
export const setArticleBody = body => ({ type: types.SET_ARTICLE_BODY, body });
export const setArticleTag = tag => ({ type: types.SET_ARTICLE_TAG, tag });
