import * as types from '../types';
import ChartService from '../../services/ChartService';
import ChartDataService from '../../services/ChartDataService';
import { fireToast } from '../../helpers/utilities';

export const setChartDataLoading = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_CHART_DATA_LOADING,
    payload,
  });
};

export const fetch = (id) => async (dispatch) => {
  dispatch(setChartDataLoading(true));
  try {
    const { data: { data } } = await ChartService.fetchChartDatas(id);
    dispatch({
      type: types.SET_CHART_DATAS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartDataLoading(false));
  }
};

export const store = ({
  // eslint-disable-next-line camelcase
  id, y_value, x_value, color,
}) => async (dispatch) => {
  try {
    dispatch(setChartDataLoading(true));
    const { data: { data } } = await ChartService.storeChartDatas(id, { y_value, x_value, color });
    if (data) {
      dispatch(fetch(id));
      fireToast('success', 'Registro agregado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartDataLoading(false));
  }
};

export const update = ({
  // eslint-disable-next-line camelcase
  id, y_value, x_value, color, chartId,
}) => async (dispatch) => {
  try {
    dispatch(setChartDataLoading(true));
    const { data: { data } } = await ChartDataService.update(id, { y_value, x_value, color });
    if (data) {
      dispatch(fetch(chartId));
      fireToast('success', 'Registro modificado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartDataLoading(false));
  }
};

export const destroy = ({ id, chartId }) => async (dispatch) => {
  try {
    dispatch(setChartDataLoading(true));
    const { status } = await ChartDataService.destroy(id);
    if (status === 205) {
      dispatch(fetch(chartId));
      fireToast('success', 'Registro eliminado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartDataLoading(false));
  }
};
