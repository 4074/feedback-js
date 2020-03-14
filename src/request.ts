export default class Request implements Model.Request {
  send = (data: any): void => {
    console.log(data)
  }
}
