/* eslint-disable class-methods-use-this */
import request from './request'
import Component from './renders'
import { deepExtends } from './utils'
import emitter from './emitter'
import { MODAL_SUBMIT_EVENT } from './renders/modal'
import { TRIGGER_CLICK } from './renders/trigger'

export const SUBMITING_EVENT = 'SUBMITING_EVENT'
export const SUBMIT_SUCCESS_EVENT = 'SUBMIT_SUCCESS_EVENT'
export const SUBMIT_FAIL_EVENT = 'SUBMIT_FAIL_EVENT'

const defaults: FeedbackOptions = {
  url: '',
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
  private appId: string

  private __user: string

  private __data: any

  private component?: Component

  private options: FeedbackOptions

  readonly window: Window

  constructor(window: Window) {
    this.window = window
  }

  init(appId: string, options: FeedbackOptions = {}): void {
    this.options = deepExtends(defaults, options)
    this.appId = appId
    this.component = new Component(this.options)
    this.component.render(this.options.container || document.body)

    emitter.on(MODAL_SUBMIT_EVENT, this.submit)
    emitter.emit(TRIGGER_CLICK)
  }

  user(data: string): any {
    if (data === undefined) return this.__user
    this.__user = data
  }

  data(data: any): any {
    if (data === undefined) return this.__data
    this.__data = data
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
      emitter.emit(SUBMITING_EVENT)
      request.upload(this.options.url, files, params).then(
        (data) => {
          emitter.emit(SUBMIT_SUCCESS_EVENT, data)
        },
        (err) => {
          emitter.emit(SUBMIT_FAIL_EVENT, err)
        }
      )
    } else {
      // eslint-disable-next-line no-console
      console.log(files, params)
    }
  }

  private generateRequestData(message = ''): FeedbackRequestData {
    return {
      appId: this.appId,
      path: this.window.location.href,
      userAgent: this.window.navigator.userAgent,
      message,
      user: this.__user,
      data: this.__data,
      timestamp: new Date().getTime()
    }
  }
}

;(window as any).Feedback = new Feedback(window)
