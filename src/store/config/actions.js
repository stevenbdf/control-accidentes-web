import * as types from '../types';
import ConfigService from '../../services/ConfigService';

export const setConfigLoading = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_CONFIG_LOADING,
    payload,
  });
};

export const show = ({ id }) => async (dispatch) => {
  dispatch(setConfigLoading(true));
  try {
    const { data: { data } } = await ConfigService.show(id);
    dispatch({
      type: types.SET_CONFIG,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setConfigLoading(false));
  }
};
