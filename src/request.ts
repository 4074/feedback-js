export interface AnalyticsRequest {
  send: (data: any) => void
}

export default class Request implements AnalyticsRequest {
  send = (data: any): void => {
    console.log(data)
  }
}
