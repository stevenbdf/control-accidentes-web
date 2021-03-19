import BaseService from './core/BaseService';

class ChartService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'charts';

  fetch() {
    return this.get('/');
  }

  show(id) {
    return this.get(id);
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

export default new ChartService();
