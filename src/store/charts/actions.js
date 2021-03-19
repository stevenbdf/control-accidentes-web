import * as types from '../types';
import ChartService from '../../services/ChartService';

export const setChartLoading = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_CHART_LOADING,
    payload,
  });
};

export const fetch = () => async (dispatch) => {
  dispatch(setChartLoading(true));
  try {
    const { data: { data } } = await ChartService.fetch();
    dispatch({
      type: types.SET_CHARTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartLoading(false));
  }
};
