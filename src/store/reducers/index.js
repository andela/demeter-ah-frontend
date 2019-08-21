import { combineReducers } from 'redux';
import authReducer from './Auth';
import resetPassword from './resetPassword';
import changePassword from './changePassword';
import articles from './articles';
import editProfile from './editProfile';
import viewProfile from './viewProfile';
import membership from './Membership';
import viewArticle from './viewArticle';
import relatedArticles from './relatedArticles';

const reducers = combineReducers({
  auth: authReducer,
  resetPassword,
  changePassword,
  articles,
  editProfile,
  viewProfile,
  membership,
  viewArticle,
  relatedArticles
});

export default reducers;
