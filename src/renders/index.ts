import Modal from './modal'
import Trigger from './trigger'
import theme from './theme'

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
    if (this.options.primaryColor) theme.set(this.options)

    this.$conainer = document.createElement('div')
    this.$conainer.classList.add('feedback-container')
    parent.appendChild(this.$conainer)

    this.modal = new Modal()
    this.modal.render(this.$conainer, this.options.strings)

    this.trigger = new Trigger()
    this.trigger.render(this.$conainer)
  }
}
