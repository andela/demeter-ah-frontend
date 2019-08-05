import { combineReducers } from 'redux';
import signUpReducer from './signup';

const reducers = combineReducers({
  auth: signUpReducer,
});

export default reducers;
