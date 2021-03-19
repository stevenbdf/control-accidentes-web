import BaseService from './core/BaseService';

class FileService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'files';

  fetch() {
    return this.get('/');
  }

  post(data) {
    return this.post('/', data);
  }

  delete(id) {
    return this.delete(id);
  }
}

export default new FileService();
