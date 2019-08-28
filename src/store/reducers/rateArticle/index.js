import * as types from '../../actions/actionTypes';
import { rateState } from '../initialState';

const rate = (state = rateState, action) => {
  switch (action.type) {
    case types.RATE_UPDATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case types.RATE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case types.RATE_PENDING:
      return {
        ...state,
        isLoading: true,
        isCompleted: false,
        error: null,
      };
    case types.RATE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case types.RATE_CLEANUP:
      return {
        ...rate,
      };
    default:
      return state;
  }
};

export default rate;
