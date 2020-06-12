import { requestAnimationFrame } from '../utils'
import { iconImage, iconRemove } from './icons'

export default class Modal {
  private $element: HTMLDivElement

  private $wrap: HTMLDivElement

  private $file: HTMLInputElement

  private $uploader: HTMLDivElement

  private $trigger: HTMLDivElement

  private hiding = false

  private showing = false

  private visible = false

  private visibleHanders: ((visible: boolean) => void)[] = []

  private images: File[] = []

  private imageMaxCount = 3

  maskClosable = true

  render(parent: Element, strings: FeedbackStrings): void {
    this.remove()
    this.$element = document.createElement('div')
    this.$element.classList.add('feedback-modal-container')
    this.$element.innerHTML = `
        <div class="feedback-modal">
          <button type="button" aria-label="Close" class="feedback-modal-close">
            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </button>
          <div class="feedback-modal-header">${strings.title}</div>
          <div class="feedback-modal-body">
            <div class="feedback-form-item">
              <div class="feedback-form-label">${strings.labels?.input}</div>
              <textarea placeholder="${strings.placeholders?.input}"></textarea>
            </div>
            <div class="feedback-form-item">
              <div class="feedback-form-label">${strings.labels?.image}</div>
              <input type="file" class="feedback-input-file" multiple />
              <div class="feedback-form-uploader">
                <div class="feedback-form-image feedback-uploader-trigger">
                  ${iconImage}
                  <div class="feedback-image-placeholder">${
                    strings.placeholders?.image
                  }</div>
                </div>
              </div>
            </div>
            ${
              strings.contact &&
              `<div class="feedback-contact" >${strings.contact}</div>`
            }
          </div>
          <div class="feedback-modal-footer">
            <button class="feedback-submit">${strings.submit}</button>
          </div>
      </div>
    `

    this.$wrap = this.$element.querySelector(
      '.feedback-modal'
    ) as HTMLDivElement

    this.$file = this.$element.querySelector(
      '.feedback-input-file'
    ) as HTMLInputElement
    this.$file.addEventListener('change', this.handleUpload)

    this.$uploader = this.$element.querySelector(
      '.feedback-form-uploader'
    ) as HTMLInputElement

    this.$trigger = this.$element.querySelector(
      '.feedback-uploader-trigger'
    ) as HTMLInputElement
    this.$trigger.addEventListener('click', this.handleUploadStart)

    parent.appendChild(this.$element)
  }

  handleUpload = (): void => {
    const { files } = this.$file
    if (files) {
      this.$uploader.removeChild(this.$trigger)
      for (let i = 0; i < files.length; i += 1) {
        this.images.push(files[i])

        const $item = this.createImageItem(this.images.length - 1, files[i])
        this.$uploader.appendChild($item)

        if (this.images.length === this.imageMaxCount) return
      }
      if (this.images.length < this.imageMaxCount) {
        this.$uploader.appendChild(this.$trigger)
      }
    }
  }

  handleUploadStart = (): void => {
    this.$file.click()
  }

  handleRemoveImage = ($item: HTMLDivElement): void => {
    const index = parseInt($item.getAttribute('data-index') || '', 10)
    if (isNaN(index)) return

    this.$uploader.removeChild($item)
    this.images.splice(index, 1)
    if (this.images.length === this.imageMaxCount - 1) {
      this.$uploader.appendChild(this.$trigger)
    }
  }

  createImageItem = (index: number, file: File): HTMLDivElement => {
    const $item = document.createElement('div')
    $item.classList.add('feedback-form-image')
    $item.setAttribute('data-index', index.toString())
    $item.addEventListener('click', this.handleRemoveImage.bind(null, $item))

    const $mask = document.createElement('div')
    $mask.classList.add('feedback-image-mask')
    $mask.innerHTML = iconRemove
    $item.appendChild($mask)

    const $img = document.createElement('img') as HTMLImageElement
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (): void => {
      $img.src = reader.result as string
      reader.onload = null
    }
    $item.appendChild($img)

    return $item
  }

  toogle = (): void => {
    if (!this.$element || this.showing || this.hiding) return
    if (this.visible) return this.hide()

    this.visible = true
    this.showing = true
    this.handleVisibleChange()

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
    if (!this.$element || this.hiding || this.showing || !this.visible) return

    this.visible = false
    this.hiding = true
    this.$wrap.classList.add('leave-start')
    this.handleVisibleChange()

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

  private handleVisibleChange = (): void => {
    for (const handler of this.visibleHanders) {
      handler(this.visible)
    }
  }

  onVisibleChange = (handler: (visible: boolean) => void): void => {
    this.visibleHanders.push(handler)
  }

  remove = (): void => {
    if (!this.$element || !this.$element.parentElement) return
    this.$element.parentElement.removeChild(this.$element)
  }
}
