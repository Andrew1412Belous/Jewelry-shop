const addElem = require('../../helpers/DOM/addElem').addElem

const {
  orderHistoryStyle,
  orderHistoryTemplate,
} = require('../../templates/index')

export class OrderHistoryComp extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'order-history-section',
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

      require('../../helpers/components/orderHistory/insertOrderHistoryProducts')
        .insertOrderHistoryProducts(this.section)

      // this.section.querySelector('#back-btn').onclick = function () {
      //   (headerElems.main, myProfile)
      // }
      //
      // this.section.querySelector('#close-btn').onclick = function () {
      //   (false)
      //   headerElems.main.innerHTML = ''
      // }
    })
  }
}

customElements.define('order-history', OrderHistoryComp)

export const orderHistory = document.createElement('order-history')
