const addElem = require('../../helpers/DOM/addElem').addElem
const hideComponentCallback = require('../../callbacks/components/hideComponentCallback').hideComponentCallback

const {
  messageStyle,
  messageTemplate,
} = require('../../templates/index')

export class MessagePopup extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'message-popup',
      innerHTML: messageTemplate,
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: messageStyle,
    })
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-message-popup', event => {
      this.section.style.display = 'block'

      const { title, text } = event.detail

      this.shadow.querySelector('#message-title').innerText = title
      this.shadow.querySelector('#message-text').innerText = text

      setTimeout(() => hideComponentCallback.bind(this, messageTemplate)(), 1000)
    })
  }
}

customElements.define('message-popup', MessagePopup)
