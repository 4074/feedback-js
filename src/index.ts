/* eslint-disable class-methods-use-this */
import request from './request'
import Component from './renders'
import { deepExtends } from './utils'

const defaults: FeedbackOptions = {
  strings: {
    title: '意见反馈',
    submit: '提 交',
    labels: {
      input: '您遇到的问题、意见或建议',
      image: '可附上相关截图（最多添加3张）'
    },
    placeholders: {
      input: '请输入',
      image: '上传或粘贴图片'
    },
    contact: '还可以直接联系我们：XXX'
  }
}

export default class Feedback {
  private app?: Model.App

  private componet?: Component

  private options: FeedbackOptions = {}

  readonly window: Window

  constructor(window: Window) {
    this.window = window
  }

  init(id: string, options: FeedbackOptions = {}): void {
    this.options = deepExtends(defaults, options)
    this.app = { id }
    this.componet = new Component(this.options)
    this.componet.render(this.options.container || document.body)
  }

  send = (data: any): void => {
    // send log
    request.upload(data, this.getInfo())
  }

  getInfo(): object {
    return {
      app: this.app,
      path: this.window.location.href,
      userAgent: this.window.navigator.userAgent
    }
  }
}

;(window as any).Feedback = new Feedback(window)
