import { combineReducers } from 'redux';
import authReducer from './Auth';
import resetPassword from './resetPassword';
import articles from './articles';

const reducers = combineReducers({
  auth: authReducer,
  resetPassword,
  articles,
});

export default reducers;
