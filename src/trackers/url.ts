import { Analytics, AnalyticsTracker } from './tracker'
import Swizzle from '../swizzle'

export default class UrlTracker implements AnalyticsTracker {
  name = 'url'

  analytics: Analytics

  path: string

  install(instance: Analytics): void {
    this.analytics = instance
    this.path = UrlTracker.getPath()

    Swizzle.add(history, 'pushState', this.handleChangeState)
    Swizzle.add(history, 'replaceState', this.handleChangeState)
    this.analytics.window.addEventListener('popstate', this.handlePopState)
  }

  destory(): void {
    Swizzle.remove(history, 'pushState', this.handleChangeState)
    Swizzle.remove(history, 'replaceState', this.handleChangeState)
    this.analytics.window.removeEventListener('popstate', this.handlePopState)
  }

  handleChangeState = (origin: Function) => {
    return (...args: []): void => {
      origin.apply(history, args)
      this.handleUrlChange()
    }
  }

  handlePopState = (): void => {
    this.handleUrlChange()
  }

  handleUrlChange(): void {
    setTimeout(() => {
      const prevPath = this.path
      const currentPath = UrlTracker.getPath()

      if (prevPath !== currentPath) {
        this.path = currentPath
        const data = {
          path: this.path,
          title: document.title
        }

        this.analytics.send(data)
      }
    }, 0)
  }

  static getPath(): string {
    return location.pathname + location.search
  }
}
