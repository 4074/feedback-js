/**
 * This is a typescript version for https://github.com/googleanalytics/autotrack/blob/master/lib/method-chain.js
 * Rename to Swizzle which is a common concept on iOS development.
 * The primary feature is to override a method safely.
 */

/**
 * A class exports two static method, 'add' and 'remove'
 */
export default class Swizzle {
  static instances: Swizzle[] = []

  /**
   * Overrides a passed method on the object
   * @param context object The object containing the method to override.
   * @param method string The method name should be override.
   * @param swizzled Function The override method to add.
   * @api public
   */
  static add(context: object, method: string, swizzled: Function): void {
    let methodChain = Swizzle.getMethodChain(context, method)

    if (!methodChain) {
      methodChain = new Swizzle(context, method)
      Swizzle.instances.push(methodChain)
    }

    methodChain.add(swizzled)
  }

  /**
   * Removes a overridden method from a object
   * @param context object The object containing the method to override.
   * @param method string The method name should to remove
   * @param swizzled Function The override method to remove.
   * @api public
   */
  static remove(context: object, method: string, swizzled: Function): void {
    const methodChain = Swizzle.getMethodChain(context, method)
    if (methodChain) {
      methodChain.remove(swizzled)
    }
  }

  /**
   * Gets the Swizzle instance for the passed object and method
   * @param context object The object containing the method.
   * @param method string The method name on the object.
   */
  static getMethodChain(context: object, method: string): Swizzle | undefined {
    return Swizzle.instances.find(
      (item) => item.context === context && item.method === method
    )
  }

  // eslint-disable-next-line react/static-property-placement
  private context: any

  private method: string

  private methodChain: Function[] = []

  private boundMethodChain: Function[] = []

  private originalMethod: Function

  private wrappedMethod: Function

  /**
   * Creates a wrapped function to replace the passed method.
   * @param context object The object containing the method.
   * @param method string The method name on the method.
   */
  constructor(context: any, method: string) {
    this.context = context
    this.method = method

    // The wrapped method will replace the original method
    this.wrappedMethod = (...args: any[]): Function | undefined => {
      if (this.boundMethodChain.length) {
        return this.boundMethodChain[this.boundMethodChain.length - 1](...args)
      }
    }

    this.originalMethod = context[method]
    // eslint-disable-next-line no-param-reassign
    context[method] = this.wrappedMethod
  }

  /**
   * Adds a method to the chain.
   * @param override Function The method to add.
   * @api public
   */
  add(override: Function): void {
    this.methodChain.push(override)
    this.rebindMethodChain()
  }

  /**
   * Removes a method from chain.
   * @param verride Function The method to remove.
   * @api public
   */
  remove(verride: Function): void {
    const index = this.methodChain.indexOf(verride)
    if (index >= 0) {
      this.methodChain.splice(index, 1)
      if (this.methodChain.length > 0) {
        this.rebindMethodChain()
      } else {
        this.destroy()
      }
    }
  }

  /**
   * Rebinds the method chain when add or remove.
   */
  private rebindMethodChain(): void {
    this.boundMethodChain = []
    for (let i = 0; i < this.methodChain.length; i += 1) {
      const previousMethod = this.boundMethodChain[i - 1] || this.originalMethod
      this.boundMethodChain.push(this.methodChain[i](previousMethod))
    }
  }

  /**
   * Removes the Swizzle instance, and set the original method back.
   */
  private destroy(): void {
    const index = Swizzle.instances.indexOf(this)
    if (index >= 0) {
      Swizzle.instances.splice(index, 1)
      this.context[this.method] = this.originalMethod
    }
  }
}
