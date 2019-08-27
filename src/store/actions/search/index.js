import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const searchPending = (keyword = null) => ({
  type: types.SEARCH_PENDING,
  payload: keyword
});

export const searchSuccess = articles => ({
  type: types.SEARCH_SUCCESS,
  payload: articles
});

export const searchError = error => ({
  type: types.SEARCH_ERROR,
  payload: error
});

export const searchCleanUp = () => ({
  type: types.SEARCH_CLEAN_UP
});

export const searchAction = ({ title, tag, author }) => async (dispatch) => {
  dispatch(searchPending(title));

  try {
    const result = await axiosCall({
      path: `/api/v1/search?title=${title}&author=${author || ''}&tag=${tag || ''}`,
      method: 'get',
    });
    dispatch(searchSuccess(result.search));
  } catch (err) {
    const { response } = err;
    const error = (response
        && response.data
        && (response.data.message || response.data.error))
      || err.message;
    dispatch(searchError(error));
  }
};
