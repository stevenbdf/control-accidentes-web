import * as types from '../types';
import AuthService from '../../services/AuthService';
import HttpService from '../../services/core/HttpService';
import TokenService from '../../services/core/TokenService';

export const setUserLoading = (payload) => async (dispatch) => {
  dispatch({
    type: types.SET_USER_LOADING,
    payload,
  });
};

export const login = () => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { data: { data } } = await AuthService.login({ username: 'admins', password: 'password', remember: false });
    TokenService.setToken(data.token, true);
    HttpService.setAuthorizationHeader(data.token);
    HttpService.mount401Interceptor();

    dispatch({
      type: types.SET_USER,
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setUserLoading(false));
  }
};
