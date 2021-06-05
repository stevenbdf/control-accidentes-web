import axios from 'axios';
import { fireToast } from '../../helpers/utilities';
import * as types from '../../store/types';
import store from '../../store';
import TokenService from './TokenService';

export default {
  /**
   * Set base URL for any requests.
   *
   * @param {string} url
   */
  setBaseURL(url) {
    axios.defaults.baseURL = url;
  },

  /**
   * Set Authorization header with Bearer token.
   *
   * @param {string} token
   */
  setAuthorizationHeader(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  /**
   * Remove Authorization header.
   */
  removeAuthorizationHeader() {
    delete axios.defaults.headers.common.Authorization;
  },

  /**
   * Show custom error messages
   */
  mountErrorInterceptor() {
    axios.interceptors.response.use(null,
      (error) => {
        const { response: { data } } = error;

        if (data.errors) {
          Object.values(data.errors).forEach((item) => {
            fireToast('error', item[0]);
          });
        } else if (data.message) {
          fireToast('error', data.message);
        }

        if (error.response.status === 401 || error.response.status === 403) {
          TokenService.removeToken();
          this.removeAuthorizationHeader();
          store.dispatch({
            type: types.SET_USER,
            payload: {},
          });
        }
      });
  },
};
