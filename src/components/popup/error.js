import { addElem } from '../../helpers'

const {
  errorTemplate,
  errorStyle,
} = require('../../templates/index')

const hideComponentCallback = require('../../callbacks/components/hideComponentCallback').hideComponentCallback

export class ErrorPopup extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'error-wrapper',
      innerHTML: errorTemplate,
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: errorStyle,
    })
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-error-popup', event => {
      this.section.style.display = 'block'

      document.onkeydown = function (ev) {
        if (ev.code === 'Escape') hideComponentCallback.bind(this, errorTemplate)()
      }.bind(this)

      this.shadow.querySelector('#shadow').onclick = hideComponentCallback.bind(this, errorTemplate)
      this.shadow.querySelector('#close-btn').onclick = hideComponentCallback.bind(this, errorTemplate)

      const { title, text } = event.detail

      this.shadow.querySelector('#error-title').innerText = title
      this.shadow.querySelector('#error-text').innerText = text
    })
  }
}

customElements.define('error-popup', ErrorPopup)
