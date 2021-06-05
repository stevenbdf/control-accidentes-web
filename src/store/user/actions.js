import * as types from '../types';
import AuthService from '../../services/AuthService';
import HttpService from '../../services/core/HttpService';
import TokenService from '../../services/core/TokenService';
import UserService from '../../services/UserService';
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

export const fetch = () => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { data: { data } } = await UserService.fetch();
    dispatch({
      type: types.SET_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setUserLoading(false));
  }
};

export const store = ({ username, password, role }) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { data: { data } } = await UserService.store({ username, password, role });
    if (data) {
      dispatch(fetch());
      fireToast('success', 'Usuario agregado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setUserLoading(false));
  }
};

export const update = ({
  // eslint-disable-next-line camelcase
  id, username, password, password_confirmation, role,
}) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { data: { data } } = await UserService.update(id, {
      username, password, password_confirmation, role,
    });
    if (data) {
      dispatch(fetch());
      fireToast('success', 'Usuario modificado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setUserLoading(false));
  }
};

export const destroy = ({ id }) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { status } = await UserService.destroy(id);
    if (status === 205) {
      dispatch(fetch());
      fireToast('success', 'Usuario eliminado correctamente');
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setUserLoading(false));
  }
};
