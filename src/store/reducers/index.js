import { combineReducers } from 'redux';
import signUpReducer from './signup';
import resetPassword from './resetPassword';

const reducers = combineReducers({
  auth: signUpReducer,
  resetPassword,
});

export default reducers;
