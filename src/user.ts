import { uuid } from './utils'

/**
 * The User class store info about user.
 * Generate a instance when track start with a uuid.
 * Get/Set key-value data with `porps` method.
 */
export default class User {
  uuid: string

  private propsStore: { [key: string]: any } = {}

  constructor() {
    this.uuid = uuid()
  }

  /**
   * Get/Set user info.
   * @param key string|object The key to get/set, iterates it if object passed.
   * @param value any: The value to set if passed.
   * @api public
   */
  props(key?: string | object, value?: any): void {
    if (typeof key === 'object') {
      this.propsStore = {
        ...this.propsStore,
        ...key
      }
    } else if (typeof key === 'string') {
      if (typeof value === 'undefined') {
        return this.propsStore[key]
      }
      this.propsStore[key] = value
    }
  }
}
