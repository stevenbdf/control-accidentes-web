import * as types from '../types';
import AuthService from '../../services/AuthService';
import HttpService from '../../services/core/HttpService';
import TokenService from '../../services/core/TokenService';
import { fireToast } from '../../helpers/utilities';

export const setUserLoading = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_USER_LOADING,
    payload,
  });
};

export const login = ({ username, password, remember }) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { data: { data } } = await AuthService.login({ username, password, remember });
    TokenService.setToken(data.token, remember);
    HttpService.setAuthorizationHeader(data.token);

    dispatch({
      type: types.SET_USER,
      payload: data.user,
    });

    fireToast('success', 'Bienvenido');
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setUserLoading(false));
  }
};

export const me = () => async (dispatch) => {
  try {
    const { data: { data } } = await AuthService.me();
    dispatch({
      type: types.SET_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  AuthService.logout();
};
