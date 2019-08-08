import * as types from '../../actions/actionTypes';
import { articles } from '../initialState';

export default function articlesReducer(state = articles, action) {
  switch (action.type) {
    case types.OPEN_PUBLISH_MODAL:
      return { ...state, openPublishModal: action.openPublishModal };
    case types.CLOSE_PUBLISH_MODAL:
      return { ...state, openPublishModal: action.openPublishModal };
    default:
      return state;
  }
}
