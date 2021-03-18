import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';
const EXPIRATION_DAYS = 365;

export default {

  /**
   * Get token from cookie.
   *
   * @returns {string|null}
   */
  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  /**
   * Set token in cookies.
   *
   * @param {string} token
   */
  setToken(token, remember = true) {
    Cookies.set(TOKEN_KEY, token, { expires: remember ? EXPIRATION_DAYS : null });
  },

  /**
   * Remove token from cookies.
   */
  removeToken() {
    Cookies.remove(TOKEN_KEY);
  },
};
