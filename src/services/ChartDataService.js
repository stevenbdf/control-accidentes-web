import BaseService from './core/BaseService';

class ChartService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'chart-datas';

  show(id) {
    return this.get(id);
  }

  update(id, data) {
    return this.put(id, data);
  }

  destroy(id) {
    return this.delete(id);
  }
}

export default new ChartService();
