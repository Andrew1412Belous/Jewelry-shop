const {
  orderHistoryStyle,
  orderHistoryTemplate,
} = require('../../templates/index')

const {
  hideUpdatingComp,
  favoriteBackBtnCallback,
} = require('../../callbacks/index')

const {
  addElem,
  insertOrderHistoryProducts,
} = require('../../helpers/index')

export class OrderHistoryComp extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'order-history-wrapper',
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: orderHistoryStyle,
    })

    this.section.innerHTML = orderHistoryTemplate
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-order-history', () => {
      this.section.style.display = 'block'

      insertOrderHistoryProducts(this.section)

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideUpdatingComp.bind(this)(orderHistoryTemplate)
      }

      this.shadow.querySelector('#shadow')
        .onclick = hideUpdatingComp.bind(this, orderHistoryTemplate)

      this.shadow.querySelector('#back-btn')
        .onclick = favoriteBackBtnCallback.bind(this, orderHistoryTemplate)

      this.shadow.querySelector('#close-btn')
        .onclick = hideUpdatingComp.bind(this, orderHistoryTemplate)
    })
  }
}

customElements.define('order-history', OrderHistoryComp)
