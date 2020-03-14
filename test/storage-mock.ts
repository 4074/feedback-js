export default class StorageMock implements Storage {
  length = 0

  keys: string[] = []

  store: { [name: string]: string } = {}

  clear(): void {
    this.length = 0
    this.keys = []
    this.store = {}
  }

  getItem(key: string): string | null {
    return this.store[key] || null
  }

  key(index: number): string | null {
    return index < this.keys.length ? this.keys[index] : null
  }

  removeItem(key: string): void {
    const index = this.keys.indexOf(key)
    if (index >= 0) {
      this.keys = this.keys
        .slice(0, index)
        .concat(this.keys.slice(index + 1, this.keys.length + 1))
      this.length -= 1
    }
    delete this.store[key]
  }

  setItem(key: string, value: string): void {
    if (this.keys.indexOf(key) < 0) {
      this.keys.push(key)
      this.length += 1
    }
    this.store[key] = value
  }
}
