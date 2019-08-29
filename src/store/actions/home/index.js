import { axiosCall } from '../../../utils';

export const getArticles = ({
  sort,
  offset = 0,
  limit = 5,
}) => async () => {
  try {
    const result = await axiosCall({
      path: `/api/v1/articles?sort=${sort}&offset=${offset}&limit=${limit}`, method: 'get', payload: null
    });
    return result;
  } catch (err) {
    /* istanbul ignore next */
    // eslint-disable-next-line no-unused-vars
    const { response } = err;
    /* istanbul ignore next */
  }
};
