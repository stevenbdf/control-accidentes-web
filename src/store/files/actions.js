import * as types from '../types';
import FileService from '../../services/FileService';
import { fireToast } from '../../helpers/utilities';

export const setFileLoading = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_FILES_LOADING,
    payload,
  });
};

export const fetch = () => async (dispatch) => {
  dispatch(setFileLoading(true));
  try {
    const { data: { data } } = await FileService.fetch();
    dispatch({
      type: types.SET_FILES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setFileLoading(false));
  }
};

export const store = (body) => async (dispatch) => {
  try {
    dispatch(setFileLoading(true));
    const { data: { data } } = await FileService.store(body);
    if (data) {
      dispatch(fetch());
      fireToast('success', 'Archivo almacenado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setFileLoading(false));
  }
};

export const destroy = ({ id }) => async (dispatch) => {
  try {
    dispatch(setFileLoading(true));
    const { status } = await FileService.destroy(id);
    if (status === 205) {
      dispatch(fetch());
      fireToast('success', 'Archivo eliminado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setFileLoading(false));
  }
};
