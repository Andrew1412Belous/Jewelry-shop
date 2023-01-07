import {
  addElem,
  checkBasketProducts,
  getElemsByIdFromShadow,
  getProduct,
  setFormParams,
  toggleDisplayMain
} from '../helpers'
import { orderStyle } from '../templates'
import { orderTemplate } from '../templates/orderForm/orderTemplate'
import { orderFormElemNames } from '../configs/elemNames/orderForm/orderFormElemNames'
import {
  cardCheckClickCallback, cardCvvInputCallback, cardDateInputCallback, cardNameInputCallback,
  cardNumberInputCallback, favoriteBackBtnCallback,
  setCyrillicInputParamsCallback,
  telInputCallback,
} from '../callbacks'
import { addressInputCallback } from '../callbacks/orderForm/addressInputCallback'
import { insertOrderProducts } from '../helpers/orderForm/insertOrderProducts'
import { buyAllProductsBtnCallback } from '../callbacks/orderForm/buyAllProductsBtnCallback'
import { orderBackBtnCallback } from '../callbacks/orderForm/orderBackBtnCallback'
import { products } from '../configs'
import { currentProduct } from '../helpers/productPage/currentProduct'

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
    insertOrderProducts(this.section)

    this.elems = this.addElems(orderFormElemNames)

    setFormParams(this.elems)

    this.elems['close-btn'].onclick = function () {
      toggleDisplayMain(false)
    }

    this.elems['back-btn'].onclick = orderBackBtnCallback.bind(this)

    this.elems['input-tel'].oninput = telInputCallback.bind(this)
    this.elems['input-name'].oninput = setCyrillicInputParamsCallback.bind(this)
    this.elems['input-surname'].oninput = setCyrillicInputParamsCallback.bind(this)
    this.elems['input-patronymic'].oninput = setCyrillicInputParamsCallback.bind(this)
    this.elems['input-city'].oninput = setCyrillicInputParamsCallback.bind(this)
    this.elems['input-address'].oninput = addressInputCallback.bind(this)

    this.elems.credit.onclick = cardCheckClickCallback.bind(this)
    this.elems.debit.onclick = cardCheckClickCallback.bind(this)
    this.elems.live.onclick = cardCheckClickCallback.bind(this)

    this.elems['input-card-number'].oninput = cardNumberInputCallback.bind(this)
    this.elems['input-card-name'].oninput = cardNameInputCallback.bind(this)
    this.elems['input-card-date'].oninput = cardDateInputCallback.bind(this)
    this.elems['input-card-cvv'].oninput = cardCvvInputCallback.bind(this)

    this.elems['order-buy-btn'].onclick = buyAllProductsBtnCallback.bind(this)
  }

  disconnectedCallback () {
    this.section.innerHTML = orderTemplate

    if (document.title === 'Catalog') {
      document.querySelectorAll('.product-btn')
        .forEach((btn, index) => {
          checkBasketProducts(btn, getProduct(products[index]), 'catalog-page')
        })
    } else if (document.title === 'Product') {
      checkBasketProducts(document.getElementById('basket-btn'), currentProduct, 'product-page')
    }
  }
}

customElements.define('order-form', OrderForm)

export const orderForm = document.createElement('order-form')
