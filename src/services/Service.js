import inflection from 'inflection';
import BaseService from './core/BaseService';

const getApiResourceName = Symbol('getApiResourceName');
const getPrimaryKey = Symbol('getPrimaryKey');

export default class Service extends BaseService {
  /**
   * @type {string}
   */
  apiResource = this[getApiResourceName]();

  /**
   * @type {string}
   */
  primarykey = 'id';

  /**
   * Display the current resource.
   *
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  all() {
    return this.get('');
  }

  /**
   * Alias for all.
   *
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  fetch() {
    return this.all();
  }

  /**
   * Display the specified resource.
   *
   * @param {object|number} resource
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  show(resource) {
    return this.get(`/${this[getPrimaryKey](resource)}`);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param {object} resource
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  store(resource) {
    return super.post('', resource);
  }

  /**
   * Alias for store.
   *
   * @param {object} resource
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  create(resource) {
    return this.store(resource);
  }

  /**
   * Update the current resource in storage.
   *
   * @param {object} resource
   * @param {boolean} ignorePrimaryKey
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  update(resource, ignorePrimaryKey = false) {
    const url = ignorePrimaryKey ? '' : `/${this[getPrimaryKey](resource)}`;
    return super[ignorePrimaryKey ? 'post' : 'patch'](url, resource);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param {object} resource
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  destroy(resource) {
    return super.delete(`/${this[getPrimaryKey](resource)}`);
  }

  /**
   * Alias for destroy.
   *
   * @param {object} resource
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  delete(resource) {
    return this.destroy(resource);
  }

  /**
   * Get the API Resource name from class name.
   *
   * @returns {*|PromiseLike<T | never>|Promise<T | never>}
   */
  [getApiResourceName]() {
    return `/${inflection.pluralize(this.constructor.name.replace('Service', '').toLowerCase())}`;
  }

  /**
   * Get the primary key of resource.
   *
   * @param {object} resource
   * @returns {string}
   */
  [getPrimaryKey](resource) {
    if (typeof resource === 'object') {
      return resource[this.primarykey];
    }
    return String(resource);
  }
}
