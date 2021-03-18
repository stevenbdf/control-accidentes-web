import BaseService from './core/BaseService';

class ConfigService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'configs';

  show(id) {
    return this.get(id);
  }
}

export default new ConfigService();
