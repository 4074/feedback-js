/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { rgba } from '../utils'

class Theme {
  private $style: HTMLStyleElement

  set(options: FeedbackOptions): void {
    const { primaryColor, bottom, right, size } = options
    if (!this.$style) {
      this.$style = document.createElement('style')
      const $head = document.querySelector('head')!
      $head.append(this.$style)
    }
    const color = rgba(primaryColor)
    this.$style.innerHTML = `
      .feedback-container {
        right: ${right}px;
        bottom: ${bottom + 68}px;
      }
      .feedback-container .feedback-trigger {
        color: ${color};
        width: ${size}px;
        height: ${size}px;
      }
      .feedback-container .feedback-trigger .trigger-icon {
        padding: ${Math.round(size * 0.2)}px;
      }
      .feedback-container .feedback-modal .feedback-form-item textarea:focus {
        border-color: ${rgba(primaryColor, 0.8)};
        box-shadow: 0 0 0 2px ${rgba(primaryColor, 0.2)};
      }
      .feedback-container .feedback-modal .feedback-form-item .feedback-form-uploader .feedback-uploader-trigger:hover {
        border-color: ${rgba(primaryColor, 0.8)};
      }
      .feedback-container .feedback-modal .feedback-modal-footer .feedback-submit-button {
        background-color: ${color};
      }
      .feedback-container .feedback-modal .feedback-modal-footer .feedback-submit-button:hover:enabled {
        background: ${rgba(primaryColor, 0.8)};
      }
    `
  }

  remove(): void {
    if (this.$style && this.$style.parentElement) {
      this.$style.parentElement.removeChild(this.$style)
    }
  }
}

export default new Theme()
