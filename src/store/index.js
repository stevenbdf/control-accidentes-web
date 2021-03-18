import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from './user/reducer';

const store = createStore(
  combineReducers({
    user,
  }),
  composeWithDevTools(),
);

export default store;
