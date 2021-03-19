import axios from 'axios';
import { fireToast } from '../../helpers/utilities';

let interceptor401 = null;

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
   * Intercept 401 error responses for redirect.
   */
  mount401Interceptor() {
    interceptor401 = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          // dispatch logout y redirect home
        }
        throw error;
      },
    );
  },

  /**
   * Remove 401 error response interceptor.
   */
  unmount401Interceptor() {
    axios.interceptors.response.eject(interceptor401);
  },

  /**
   * Show custom error messages
   */
  mountErrorInterceptor() {
    axios.interceptors.response.use(null,
      ({ response: { data } }) => {
        if (data.errors) {
          Object.values(data.errors).forEach((item) => {
            fireToast('error', item[0]);
          });
        } else if (data.message) {
          fireToast('error', data.message);
        }
      });
  },
};
