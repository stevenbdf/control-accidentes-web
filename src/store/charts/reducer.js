import * as types from '../types';

const initialState = {
  chart: {},
  charts: [],
  isLoading: false,
};

export const charts = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CHART_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.SET_CHART:
      return {
        ...state,
        chart: action.payload,
      };
    case types.SET_CHARTS:
      return {
        ...state,
        charts: action.payload,
      };
    default:
      return state;
  }
};
