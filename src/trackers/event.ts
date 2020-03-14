import { Analytics, AnalyticsTracker } from './tracker'

export default class EventTracker implements AnalyticsTracker {
  name = 'event'

  analytics: Analytics

  path: string

  install(instance: Analytics): void {
    this.analytics = instance
    console.info('event track installed')
    this.analytics.window.addEventListener('error', this.handleError)
  }

  handleError = (event: ErrorEvent) => {
    console.log(event)
  }

  destory(): void {
    this.analytics.window.addEventListener('error', this.handleError)
  }
}
