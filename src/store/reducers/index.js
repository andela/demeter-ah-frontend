import { combineReducers } from 'redux';
import auth from './Auth';
import articleListing from './articleListing';
import resetPassword from './resetPassword';
import changePassword from './changePassword';
import articles from './articles';
import editProfile from './editProfile';
import viewProfile from './viewProfile';
import membership from './Membership';
import viewArticle from './viewArticle';
import relatedArticles from './relatedArticles';
import bookmarks from './bookmarks';
import bookmarkArticle from './bookmarkArticle';
import comments from './Comments';
import search from './search';
import notifications from './notifications';
import rate from './rateArticle';

const reducers = combineReducers({
  auth,
  resetPassword,
  changePassword,
  articles,
  editProfile,
  viewProfile,
  membership,
  articleListing,
  viewArticle,
  relatedArticles,
  bookmarks,
  bookmarkArticle,
  comments,
  search,
  notifications,
  rate
});

export default reducers;
