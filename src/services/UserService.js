import BaseService from './core/BaseService';

class UserService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'users';

  fetch() {
    return this.get('/');
  }

  store(data) {
    return this.post('/', data);
  }

  update(id, data) {
    return this.put(id, data);
  }

  destroy(id) {
    return this.delete(id);
  }
}

export default new UserService();
