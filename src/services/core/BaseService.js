import axios from 'axios';

export default class BaseService {
  /**
   * @type {string}
   */
  apiResource = '';

  /**
   * Remove double slashes.
   *
   * @param {string} start
   * @param {string} end
   * @returns {string}
   */
  static normalize(start, end) {
    return `${start}/${end}`.replace(/\/{2,}/g, '/');
  }

  get(url, config) {
    return axios.get(this.constructor.normalize(this.apiResource, url), config);
  }

  post(url, data) {
    return axios.post(this.constructor.normalize(this.apiResource, url), data);
  }

  put(url, data) {
    return axios.put(this.constructor.normalize(this.apiResource, url), data);
  }

  patch(url, data) {
    return axios.patch(this.constructor.normalize(this.apiResource, url), data);
  }

  delete(url) {
    return axios.delete(this.constructor.normalize(this.apiResource, url));
  }
}
