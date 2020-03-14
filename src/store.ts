const STORAGE_KEY = 'ANALYTICS_STORAGE_DATA'

export interface StoreOptionsInterface {
  duration: number
}

export class Store {
  key: string

  duration: number

  storage: Storage

  constructor(
    key: string = STORAGE_KEY,
    options: StoreOptionsInterface | null = null,
    storage: Storage = window.localStorage
  ) {
    const opts = {
      duration: 0,
      ...(options || {})
    }

    this.key = key
    this.duration = opts.duration
    this.storage = storage
  }

  /**
   * Get data by key
   *
   * @param {String} key
   * @api public
   */
  get(key: string): any {
    const item = this.readStore(key)
    return item.getValue()
  }

  /**
   * Set value for key
   *
   * @param key
   * @param value
   * @param duration
   * @api public
   */
  set(key: string, value: any, duration = this.duration): void {
    const item = this.readStore(key)
    item.duration = duration
    item.setValue(value)
    this.writeStore(key, item)
  }

  private static serialize(data: StoreItem): string {
    return JSON.stringify(data.purify())
  }

  private static deserialize(data: string): StoreItem {
    return new StoreItem(JSON.parse(data))
  }

  private readStore(key?: string): StoreItem {
    const origin = this.storage.getItem(this.key)
    const blank = { data: {}, expired: 0 }

    let root = new StoreItem(blank)
    if (origin) {
      try {
        root = Store.deserialize(origin)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Analytics store error:', err)
      }
    }

    const rootValue = root.getValue()
    return key ? new StoreItem((rootValue && rootValue[key]) || blank) : root
  }

  private writeStore(key: string, item: StoreItem): void {
    const root = this.readStore()
    const source = root.getValue()

    const target = source || {}
    target[key] = item.purify()

    root.setValue(target)
    this.storage.setItem(this.key, Store.serialize(root))
  }
}

export interface StoreItemInterface {
  data: object
  expired: number
  __class?: string
}

class StoreItem {
  data: object

  expired: number

  duration: number

  constructor(source: StoreItemInterface, duration = 0) {
    this.data = source.data
    this.expired = source.expired
    this.duration = duration
  }

  isExpired(): boolean {
    return this.expired ? new Date().getTime() >= this.expired : false
  }

  tounch(): void {
    this.expired = this.duration && new Date().getTime() + this.duration * 1000
  }

  getValue(): { [name: string]: any } | null {
    return this.isExpired() ? null : this.data
  }

  setValue(data: object): void {
    this.data = data
    this.tounch()
  }

  purify(): StoreItemInterface {
    return {
      data: this.data,
      expired: this.expired,
      __class: 'StoreItem'
    }
  }
}

export default new Store()
