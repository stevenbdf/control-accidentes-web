import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from './user/reducer';
import { config } from './config/reducer';

const store = createStore(
  combineReducers({
    user,
    config,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
