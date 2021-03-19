import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from './user/reducer';
import { config } from './config/reducer';
import { charts } from './charts/reducer';
import { chartDatas } from './chartDatas/reducer';

const store = createStore(
  combineReducers({
    user,
    config,
    charts,
    chartDatas,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
