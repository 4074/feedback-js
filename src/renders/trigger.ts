import { iconFeedback, iconClose } from './icons'

export default class Trigger {
  private $element: HTMLDivElement

  render(parent: Element): void {
    this.remove()
    this.$element = document.createElement('div')
    this.$element.classList.add('feedback-trigger')
    this.$element.innerHTML = `
      <div class="trigger-icon-normal">${iconFeedback}</div>
      <div class="trigger-icon-active">${iconClose}</div>
    `
    parent.appendChild(this.$element)
  }

  show = (): void => {
    if (!this.$element) return
    this.$element.style.display = 'block'
  }

  remove = (): void => {
    if (!this.$element || !this.$element.parentElement) return
    this.$element.parentElement.removeChild(this.$element)
  }

  changeMode = (status: 'normal' | 'active'): void => {
    if (!this.$element) return
    if (status === 'normal') {
      this.$element.classList.remove('active')
    } else {
      this.$element.classList.add('active')
    }
  }

  onClick(fn: (event: MouseEvent) => any): void {
    if (!this.$element) return
    this.$element.addEventListener('click', fn)
  }
}
