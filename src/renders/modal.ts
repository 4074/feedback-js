import './modal.scss'

class Modal {
  private $element: HTMLDivElement

  maskClosable = true

  render(parent: Element): void {
    this.remove()
    this.$element = document.createElement('div')
    this.$element.classList.add('feedback-modal-container')
    this.$element.innerHTML = `
      <div class="feedback-modal-mask"></div>
      <div class="feedback-modal-wrap">
        <div class="feedback-modal">
          <button type="button" aria-label="Close" class="feedback-modal-close">
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </button>
          <div class="feedback-modal-header">提交反馈</div>
          <div class="feedback-modal-body">
            <textarea placeholder="请输入你遇到的问题或建议"></textarea>
          </div>
          <div class="feedback-modal-footer">
            <button type="button" class="feedback-modal-submit">提交</button>
          </div>
        </div>
      </div>
    `

    const $mask = this.$element.querySelector('.feedback-modal-mask')
    if ($mask) {
      $mask.addEventListener('click', this.handleMask)
    }

    const $close = this.$element.querySelector('.feedback-modal-close')
    if ($close) {
      $close.addEventListener('click', this.hide)
    }

    parent.appendChild(this.$element)
  }

  show = (): void => {
    if (!this.$element) return
    this.$element.style.display = 'block'
  }

  hide = (): void => {
    if (!this.$element) return
    this.$element.style.display = 'none'
  }

  remove = (): void => {
    if (!this.$element || !this.$element.parentElement) return
    this.$element.parentElement.removeChild(this.$element)
  }

  handleMask = (): void => {
    if (this.maskClosable) this.hide()
  }
}

export default new Modal()