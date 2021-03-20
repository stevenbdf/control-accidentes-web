import * as types from '../types';
import ChartService from '../../services/ChartService';
import { fireToast } from '../../helpers/utilities';

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

export const store = ({ name, type }) => async (dispatch) => {
  try {
    dispatch(setChartLoading(true));
    const { data: { data } } = await ChartService.store({ name, type });
    if (data) {
      dispatch(fetch());
      fireToast('success', 'Grafico agregado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartLoading(false));
  }
};

export const update = ({ id, name, type }) => async (dispatch) => {
  try {
    dispatch(setChartLoading(true));
    const { data: { data } } = await ChartService.update(id, { name, type });
    if (data) {
      dispatch(fetch());
      fireToast('success', 'Grafico modificado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartLoading(false));
  }
};

export const destroy = ({ id }) => async (dispatch) => {
  try {
    dispatch(setChartLoading(true));
    const { status } = await ChartService.destroy(id);
    if (status === 205) {
      dispatch(fetch());
      fireToast('success', 'Grafico eliminado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setChartLoading(false));
  }
};
