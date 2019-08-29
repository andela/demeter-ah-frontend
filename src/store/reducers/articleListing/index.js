import * as types from '../../actions/actionTypes';
import { articleListing } from '../initialState';

export default function articleListingReducer(state = articleListing, action) {
  switch (action.type) {
    case types.GET_ARTICLES_LISTING:
      return { ...state, ...action.articleList };
    default:
      return state;
  }
}
