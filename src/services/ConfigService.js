import BaseService from './core/BaseService';

class ConfigService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'configs';

  show(id) {
    return this.get(id);
  }

  update(id, data) {
    return this.put(id, data);
  }
}

export default new ConfigService();
