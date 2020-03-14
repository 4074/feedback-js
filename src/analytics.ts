import Request, { AnalyticsRequest } from './request'

import { Analytics, AnalyticsTracker } from './trackers/tracker'
import UrlTracker from './trackers/url'
import EventTracker from './trackers/event'

export default class AnalyticsClass implements Analytics {
  private trackers: AnalyticsTracker[] = []

  private request: AnalyticsRequest

  readonly window: Window

  constructor(window: Window) {
    this.window = window
    this.request = new Request()
  }

  // eslint-disable-next-line class-methods-use-this
  user(): void {
    // get/set user
  }

  track(
    name: string,
    props: { [name: string]: any },
    options: { [name: string]: any }
  ): void {
    // eslint-disable-next-line no-console
    console.log(name, props, options)

    this.use(new UrlTracker())
    this.use(new EventTracker())
  }

  send = (data: any): void => {
    // send log
    this.request.send(data)
  }

  use(tracker: AnalyticsTracker): void {
    if (this.trackers.find((item) => item.name === tracker.name)) return
    tracker.install(this)
    this.trackers.push(tracker)
  }
}

;(window as any).Analytics = new AnalyticsClass(window)
