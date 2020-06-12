import Modal from './modal'
import Trigger from './trigger'

import './style.scss'

export default class Component {
  private $conainer: HTMLDivElement

  private options: FeedbackOptions

  private trigger: Trigger

  private modal: Modal

  constructor(options: FeedbackOptions) {
    this.options = options
  }

  render(parent: Element): void {
    this.$conainer = document.createElement('div')
    this.$conainer.classList.add('feedback-container')
    parent.appendChild(this.$conainer)

    this.modal = new Modal()
    this.modal.render(this.$conainer)

    this.trigger = new Trigger()
    this.trigger.render(this.$conainer)
    this.trigger.onClick(this.options.onClick || this.handleTrigger)

    this.modal.onVisibleChange((visible) => {
      this.trigger.changeMode(visible ? 'active' : 'normal')
    })
  }

  handleTrigger = (event: MouseEvent): void => {
    this.modal.toogle({ x: event.pageX, y: event.pageY })
  }
}
