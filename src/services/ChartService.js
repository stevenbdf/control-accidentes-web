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
}

export default new ChartService();
