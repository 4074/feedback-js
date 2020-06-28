import request from './request'
import Component from './component'
import { deepExtends } from './utils'
import emitter from './emitter'

import {
  MODAL_SUBMIT_EVENT,
  MODAL_VISIBLE_CHANGE_EVENT
} from './component/modal'

export const SUBMITING_EVENT = 'SUBMITING_EVENT'
export const SUBMIT_SUCCESS_EVENT = 'SUBMIT_SUCCESS_EVENT'
export const SUBMIT_FAIL_EVENT = 'SUBMIT_FAIL_EVENT'

const defaults: FeedbackOptions = {
  server: DefaultServer,
  style: {
    primaryColor: '#1890ff',
    bottom: 48,
    right: 48,
    size: 48
  },
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
    contact: '或者直接联系管理员'
  }
}

export default class Feedback {
  version = '0.1.0'

  private appId: string

  private __user: string

  private __data: any

  private component?: Component

  private options: FeedbackOptions

  readonly window: Window

  constructor(window: Window) {
    this.window = window
  }

  /**
   * Setup feedback plugin
   * @param appId string The appId of current app
   * @param options object Custom options
   */
  init(appId: string, options: FeedbackOptions = defaults): void {
    this.destory()

    this.options = deepExtends(defaults, options)
    this.appId = appId
    this.component = new Component(this.options)
    this.component.render(this.options.container || document.body)

    emitter.on(MODAL_SUBMIT_EVENT, this.submit)
    emitter.on(MODAL_VISIBLE_CHANGE_EVENT, this.handleVisible)
  }

  /**
   * Destory feedback plugin
   */
  destory(): void {
    emitter.removeAll()
    if (this.component) {
      this.component.destory()
    }
  }

  /**
   * Get/Set user info
   * @param data string The user info
   * @returns any/void The user info
   */
  user(data: string): any {
    if (data === undefined) return this.__user
    this.__user = data
  }

  /**
   * Get/Set custom info
   * @param data any The custom info
   * @returns data/void The custom info
   */
  data(data: any): any {
    if (data === undefined) return this.__data
    this.__data = data
  }

  private handleVisible = (visible: boolean): void => {
    if (visible && this.options.server) {
      request(this.options.server, this.generateRequestData('open'))
    }
  }

  private submit = ({
    message,
    files
  }: {
    message: string
    files: File[]
  }): void => {
    const params = this.generateRequestData('feedback', message)
    if (this.options.server) {
      emitter.emit(SUBMITING_EVENT)
      request(this.options.server, params, files).then(
        (data) => {
          emitter.emit(SUBMIT_SUCCESS_EVENT, data)
        },
        (err) => {
          emitter.emit(SUBMIT_FAIL_EVENT, err)
        }
      )
    } else {
      // If no server be set, print the feedback data on console.
      // eslint-disable-next-line no-console
      console.log(params, files)
    }
  }

  private generateRequestData(
    action: string,
    message?: string
  ): FeedbackRequestData {
    return {
      appId: this.appId,
      path: this.window.location.href,
      userAgent: this.window.navigator.userAgent,
      user: this.__user,
      data: this.__data,
      action,
      message,
      timestamp: new Date().getTime()
    }
  }
}

;(window as any).Feedback = new Feedback(window)
