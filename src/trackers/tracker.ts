export interface Analytics {
  window: Window
  user: () => void
  send: (data: any) => void
}

export interface AnalyticsTracker {
  name: string
  install: (analytics: Analytics) => void
  destory: () => void
}
