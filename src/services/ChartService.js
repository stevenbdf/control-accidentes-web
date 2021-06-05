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

  fetchChartDatas(id) {
    return this.get(`${id}/chart-datas`);
  }

  storeChartDatas(id, data) {
    return this.post(`${id}/chart-datas`, data);
  }
}

export default new ChartService();
