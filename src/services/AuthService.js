import BaseService from './core/BaseService';
import HttpService from './core/HttpService';
import TokenService from './core/TokenService';
import * as types from '../store/types';
import store from '../store';

class AuthService extends BaseService {
  async login(credentials) {
    return this.post('/login', credentials);
  }

  async me() {
    return this.get('me');
  }

  // eslint-disable-next-line class-methods-use-this
  logout() {
    TokenService.removeToken();

    HttpService.removeAuthorizationHeader();

    store.dispatch({
      type: types.SET_USER,
      payload: {},
    });
  }
}

export default new AuthService();
