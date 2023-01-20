import { addElem } from '../helpers'
import { orderHistoryStyle } from '../templates/orderHistory/orderHistoryStyle'
import { orderHistoryTemplate } from '../templates/orderHistory/orderHistoryTemplate'
import { insertOrderHistoryProducts } from '../helpers/components/orderHistory/insertOrderHistoryProducts'
import { headerElems } from '../configs'
import { myProfile } from './myProfile'


class OrderHistoryComp extends HTMLElement {
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

    insertOrderHistoryProducts(this.section)

    this.section.querySelector('#back-btn').onclick = function () {
      updateMainContent(headerElems.main, myProfile)
    }

    this.section.querySelector('#close-btn').onclick = function () {
      toggleDisplayMain(false)
      headerElems.main.innerHTML = ''
    }
  }

  disconnectedCallback () {
    this.section.innerHTML = orderHistoryTemplate
  }
}

customElements.define('order-history', OrderHistoryComp)

export const orderHistory = document.createElement('order-history')
