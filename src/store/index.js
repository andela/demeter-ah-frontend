import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import combineReducers from './reducers';
import dummyAction from './actions/Signup';

const middlewares = applyMiddleware(thunk);

const store = createStore(
  combineReducers,
  composeWithDevTools(middlewares),
);

store.dispatch(dummyAction);

export default store;
