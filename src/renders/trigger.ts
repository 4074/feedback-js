import './trigger.scss'

const svg =
  '<svg t="1584168732107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="200" height="200"><path d="M896 981.333333l-213.333333-128H213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V128c0-46.933333 38.4-85.333333 85.333333-85.333333h597.333334c46.933333 0 85.333333 38.4 85.333333 85.333333v853.333333zM298.666667 512c-8.533333 0-12.8 0-21.333334 4.266667s-17.066667 17.066667-21.333333 25.6c0 12.8 0 25.6 4.266667 34.133333 55.466667 93.866667 153.6 149.333333 260.266666 149.333333 106.666667 0 204.8-55.466667 260.266667-149.333333 4.266667-8.533333 8.533333-21.333333 4.266667-34.133333-4.266667-12.8-8.533333-21.333333-21.333334-25.6-8.533333-4.266667-12.8-4.266667-21.333333-4.266667-17.066667 0-29.866667 8.533333-38.4 21.333333C665.6 597.333333 597.333333 640 520.533333 640c-76.8 0-145.066667-42.666667-183.466666-106.666667-8.533333-12.8-21.333333-21.333333-38.4-21.333333z" p-id="3297" fill="currentColor"></path></svg>'

class Trigger {
  private $element: HTMLDivElement

  render(parent: Element): void {
    this.remove()
    this.$element = document.createElement('div')
    this.$element.classList.add('feedback-trigger')
    this.$element.innerHTML = svg
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

  onClick(fn: () => any): void {
    if (!this.$element) return
    this.$element.addEventListener('click', fn)
  }
}

export default new Trigger()
