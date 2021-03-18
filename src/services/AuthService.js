import BaseService from './core/BaseService';
import HttpService from './core/HttpService';
import TokenService from './core/TokenService';

class AuthService extends BaseService {
  async login(credentials) {
    return this.post('/login', credentials);
  }

  logout() {
    this.get('/logout');

    TokenService.removeToken();

    HttpService.removeAuthorizationHeader();
    HttpService.unmount401Interceptor();

    // limpiar user redux
  }
}

export default new AuthService();
