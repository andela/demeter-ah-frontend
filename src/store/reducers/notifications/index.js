import * as types from '../../actions/actionTypes';
import { notifications } from '../initialState';

export default function viewProfileReducer(state = notifications, { type, payload }) {
  switch (type) {
    case types.NOTIFICATIONS_SUCCESS:
      return { ...state, ...payload };
    case types.NOTIFICATIONS_STATUS:
      return { ...state, ...payload };
    case types.NOTIFICATIONS_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
