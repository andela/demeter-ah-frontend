import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

const getArticlesSuccess = articleList => (
  { type: types.GET_ARTICLES_LISTING, articleList }
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

export const getArticles = ({
  categoryName = '',
  selectedCategory = 0,
  offset = 0,
  limit = 5,
  user = {}
}) => async (dispatch) => {
  try {
    const path = user.id
      ? `/api/v1/articles?userId=${user.id}&category=${categoryName}&offset=${offset}&limit=${limit}`
      : `/api/v1/articles?category=${categoryName}&offset=${offset}&limit=${limit}`;
    const result = await axiosCall({
      path, method: 'get'
    });
    dispatch(getArticlesSuccess({ selectedCategory, articleList: result }));
  } catch (err) {
    /* istanbul ignore next */
    // eslint-disable-next-line no-unused-vars
    const { response } = err;
    /* istanbul ignore next */
  }
};
