import { combineReducers } from 'redux';
import authReducer from './Auth';
import resetPassword from './resetPassword';

const reducers = combineReducers({
  auth: authReducer,
  resetPassword,
});

export default reducers;
