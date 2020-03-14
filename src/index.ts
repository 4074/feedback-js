/* eslint-disable class-methods-use-this */
import Request from './request'
import trigger from './renders/trigger'
import modal from './renders/modal'

export default class Feedback {
  private request: Model.Request

  private app?: Model.App

  readonly window: Window

  constructor(window: Window) {
    this.window = window
    this.request = new Request()
  }

  init(id: string): void {
    this.app = { id }
    this.initTrigger()
    this.initModal()
  }

  initTrigger(): void {
    trigger.render(document.body)
    trigger.onClick(this.handleTrigger)
  }

  initModal(): void {
    modal.render(document.body)
  }

  handleTrigger = (): void => {
    modal.show()
  }

  send = (data: any): void => {
    // send log
    this.request.send(data)
  }
}

;(window as any).Feedback = new Feedback(window)
