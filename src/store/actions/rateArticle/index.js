import * as types from '../actionTypes';
import { axiosCall } from '../../../utils';

export const rateCleanUp = () => ({
  type: types.RATE_CLEANUP,
});

export const rateFailure = error => ({
  type: types.RATE_FAILURE,
  payload: {
    isLoading: false,
    error,
  },
});

export const ratePending = () => ({
  type: types.RATE_PENDING,
  payload: {
    isLoading: true,
    isCompleted: false,
    error: null,
  },
});

export const rateSuccess = rate => ({
  type: types.RATE_SUCCESS,
  payload: {
    rate,
    isLoading: false,
    isCompleted: true,
    error: null,
  },
});


export const postRate = ({ slug, rate }) => async (dispatch) => {
  try {
    const result = await axiosCall({
      method: 'post',
      payload: rate,
      path: `/api/v1/articles/rate/${slug}`,
    });
    dispatch(rateSuccess(result));
  } catch (err) {
    const { response } = err;
    const error = (response
        && response.data
        && (response.data.message || response.data.error))
        || err.message;
    dispatch(rateFailure(error));
  }
};
