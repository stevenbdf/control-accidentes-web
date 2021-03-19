import * as types from '../types';

const initialState = {
  chartData: {},
  chartDatas: [],
  isLoading: false,
};

export const chartDatas = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CHART_DATA_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.SET_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      };
    case types.SET_CHART_DATAS:
      return {
        ...state,
        chartDatas: action.payload,
      };
    default:
      return state;
  }
};
