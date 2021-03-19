import BaseService from './core/BaseService';

class MediaService extends BaseService {
  /**
   * @type {string}
   */
  apiResource = 'media';

  update(id, data) {
    return this.put(`${id}/attach`, data);
  }
}

export default new MediaService();
