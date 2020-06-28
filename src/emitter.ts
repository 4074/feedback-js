/**
 * A simple Event Emitter implement
 */
export class EventEmitter {
  private handleMap: Map<string, Map<symbol, Function>>

  constructor() {
    this.handleMap = new Map()
  }

  /**
   * Add a event listener
   * @param name string Event name
   * @param handle function Callback functon
   */
  on(name: string, handle: Function): Function {
    if (!this.handleMap.has(name)) this.handleMap.set(name, new Map())
    const key = Symbol(name)
    this.handleMap.get(name)?.set(key, handle)

    return (): void => {
      this.handleMap.get(name)?.delete(key)
    }
  }

  /**
   * Remove a event listener
   * @param name Event name
   */
  remove(name: string): void {
    this.handleMap.delete(name)
  }

  /**
   * Remove all listeners
   */
  removeAll(): void {
    this.handleMap = new Map()
  }

  /**
   * Emit a event
   * @param name string Event name
   * @param data any The data of event
   */
  emit(name: string, data?: any): void {
    const handles = this.handleMap.get(name)
    if (!handles) return
    for (const handle of handles.values()) {
      handle(data)
    }
  }
}

export default new EventEmitter()
