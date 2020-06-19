/* eslint-disable import/prefer-default-export */
/**
 * Generates a uuid v4 from https://gist.github.com/jed/982883
 * @param a any The char should be replace with 0~f
 * @api public
 */

export function uuid(a?: any): string {
  return a
    ? // eslint-disable-next-line no-bitwise
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : [1e7, -1e3, -4e3, -8e3, -1e11].join('').replace(/[018]/g, uuid)
}

export function requestAnimationFrame(fn: () => void): void {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(fn)
  } else {
    setTimeout(fn, 17)
  }
}

export function deepExtends<T extends object>(defaults: T, custom: T): T {
  const result: any = {}
  for (const key of Object.keys(defaults)) {
    if (typeof (defaults as any)[key] === 'object') {
      if (custom && (custom as any)[key]) {
        result[key] = deepExtends(
          (defaults as any)[key],
          custom && (custom as any)[key]
        )
      } else {
        result[key] = (defaults as any)[key]
      }
    } else {
      result[key] =
        custom && (custom as any)[key]
          ? (custom as any)[key]
          : (defaults as any)[key]
    }
  }
  return result as T
}

export function setDeepValue(source: object, keys: string[], value: any): void {
  let node: any = source
  let parent: any = source
  let index = 0

  while (node && typeof node === 'object' && index < keys.length) {
    parent = node
    node = node[keys[index]]
    index += 1
  }

  if (parent && typeof parent === 'object') parent[keys[index - 1]] = value
}
