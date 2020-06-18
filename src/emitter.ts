/* eslint-disable no-unused-expressions */
export class EventEmitter {
  private handleMap: Map<string, Map<symbol, Function>>

  constructor() {
    this.handleMap = new Map()
  }

  on(name: string, handle: Function): Function {
    if (!this.handleMap.has(name)) this.handleMap.set(name, new Map())
    const key = Symbol(name)
    this.handleMap.get(name)?.set(key, handle)

    return (): void => {
      this.handleMap.get(name)?.delete(key)
    }
  }

  emit(name: string, data?: any): void {
    const handles = this.handleMap.get(name)
    if (!handles) return
    for (const handle of handles.values()) {
      handle(data)
    }
  }
}

export default new EventEmitter()
