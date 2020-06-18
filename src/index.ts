/* eslint-disable class-methods-use-this */
import request from './request'
import Component from './renders'
import { deepExtends } from './utils'
import emitter from './emitter'
import { MODAL_SUBMIT_EVENT } from './renders/modal'
import { TRIGGER_CLICK } from './renders/trigger'

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
  private id: string

  private userInfo: any

  private component?: Component

  private options: FeedbackOptions

  readonly window: Window

  constructor(window: Window) {
    this.window = window
  }

  init(id: string, options: FeedbackOptions = {}): void {
    this.options = deepExtends(defaults, options)
    this.id = id
    this.component = new Component(this.options)
    this.component.render(this.options.container || document.body)

    emitter.on(MODAL_SUBMIT_EVENT, this.submit)
    emitter.emit(TRIGGER_CLICK)
  }

  user(info: any): any {
    if (info === undefined) return this.userInfo
    this.userInfo = info
  }

  private submit = ({
    files,
    message
  }: {
    files: File[]
    message: string
  }): void => {
    const params = this.generateRequestData(message)
    if (this.options.url) {
      request.upload(this.options.url, files, params)
    } else {
      // eslint-disable-next-line no-console
      console.log(files, params)
    }
  }

  private generateRequestData(message: string): FeedbackRequestData {
    return {
      id: this.id,
      path: this.window.location.href,
      userAgent: this.window.navigator.userAgent,
      message,
      user: this.userInfo
    }
  }
}

;(window as any).Feedback = new Feedback(window)
