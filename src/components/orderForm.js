import { addElem, getElemsByIdFromShadow, setFormParams } from '../helpers'
import { orderStyle } from '../templates'
import { orderTemplate } from '../templates/orderForm/orderTemplate'
import { orderFormElemNames } from '../configs/elemNames/orderForm/orderFormElemNames'
import { cardCheckClickCallback, telInputCallback } from '../callbacks'

class OrderForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'order-section',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: orderStyle,
    })
    this.section.innerHTML = orderTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.elems = this.addElems(orderFormElemNames)

    setFormParams(this.elems)

    this.elems.credit.onclick = cardCheckClickCallback.bind(this)
    this.elems.debit.onclick = cardCheckClickCallback.bind(this)
    this.elems.live.onclick = cardCheckClickCallback.bind(this)

    this.elems['input-tel'].oninput = telInputCallback.bind(this)
  }

  disconnectedCallback () {

  }
}

customElements.define('order-form', OrderForm)

export const orderForm = document.createElement('order-form')
