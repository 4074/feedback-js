import { requestAnimationFrame } from '../utils'

export default class Modal {
  private $element: HTMLDivElement

  private $wrap: HTMLDivElement

  private hiding = false

  private showing = false

  maskClosable = true

  render(parent: Element): void {
    this.remove()
    this.$element = document.createElement('div')
    this.$element.classList.add('feedback-modal-container')
    this.$element.innerHTML = `
        <div class="feedback-modal">
          <button type="button" aria-label="Close" class="feedback-modal-close">
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </button>
          <div class="feedback-modal-header">提交反馈</div>
          <div class="feedback-modal-body">
            <textarea placeholder="请输入你遇到的问题或建议"></textarea>
          </div>
      </div>
    `

    this.$wrap = this.$element.querySelector(
      '.feedback-modal'
    ) as HTMLDivElement

    const $close = this.$element.querySelector('.feedback-modal-close')
    if ($close) {
      $close.addEventListener('click', this.hide)
    }

    parent.appendChild(this.$element)
  }

  show = (origin: { x: number; y: number } | null): void => {
    if (!this.$element || this.showing || this.hiding) return
    this.showing = true

    if (origin) {
      this.$wrap.style.transformOrigin = `${origin.x}px ${origin.y}px`
    }
    this.$element.style.display = 'block'
    this.$wrap.classList.add('enter-start')

    requestAnimationFrame(() => {
      this.$wrap.classList.add('enter-end')
    })

    setTimeout(() => {
      this.$wrap.classList.remove('enter-start')
      this.$wrap.classList.remove('enter-end')
      this.showing = false
    }, 300)
  }

  hide = (): void => {
    if (!this.$element || this.hiding || this.showing) return
    this.hiding = true
    this.$wrap.classList.add('leave-start')

    requestAnimationFrame(() => {
      this.$wrap.classList.add('leave-end')
    })

    setTimeout(() => {
      this.$wrap.classList.remove('leave-start')
      this.$wrap.classList.remove('leave-end')
      this.$element.style.display = 'none'
      this.hiding = false
    }, 300)
  }

  remove = (): void => {
    if (!this.$element || !this.$element.parentElement) return
    this.$element.parentElement.removeChild(this.$element)
  }
}
