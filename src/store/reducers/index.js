import { combineReducers } from 'redux';
import authReducer from './Auth';
import resetPassword from './resetPassword';
import articles from './articles';
import editProfile from './editProfile';
import viewProfile from './viewProfile';
import membership from './Membership';

const reducers = combineReducers({
  auth: authReducer,
  resetPassword,
  articles,
  editProfile,
  viewProfile,
  membership,
});

export default reducers;
