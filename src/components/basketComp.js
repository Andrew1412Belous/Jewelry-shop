import { addElem, checkBasketProducts, getElemsByIdFromShadow, getProduct, toggleDisplayMain } from '../helpers'
import { basketStyle, basketTemplate } from '../templates'
import { basketElemNames } from '../configs/elemNames/basket/basketElemNames'
import { insertBasketProducts } from '../helpers/basket/insertBasketProducts'
import { basketDeleteProductCallback } from '../callbacks/basket/basketDeleteProductCallback'
import { headerElems, products } from '../configs'
import { currentProduct } from '../helpers/productPage/currentProduct'
import { basketProducts } from '../helpers/basket/basketProducts'
import {
  basketDecrBtnCallback,
  basketIncrBtnCallback,
  buyProductsCallback,
  showProductPageCallback
} from '../callbacks'

class BasketComp extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'basket-section',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: basketStyle,
    })
    this.section.innerHTML = basketTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    insertBasketProducts(this.section)

    this.elems = this.addElems(basketElemNames)

    this.elems['close-btn'].onclick = function () {
      toggleDisplayMain(false)
      headerElems.main.innerHTML = ''
    }

    this.elems['basket-section'].querySelectorAll('#delete-basket-product-btn')
      .forEach(btn => btn.onclick = basketDeleteProductCallback.bind(this))

    if (basketProducts.length) {
      this.elems['buy-all-products-btn'].onclick = buyProductsCallback.bind(this)
    }

    this.elems['basket-section'].querySelectorAll('#show-product-page-btn')
      .forEach(btn => btn.onclick = showProductPageCallback.bind(this))

    this.elems['basket-section'].querySelectorAll('#basket-decr')
      .forEach(btn => {
        if (this.elems['basket-count'].textContent === '1') {
          btn.disabled = true
        }

        btn.onclick = basketDecrBtnCallback.bind(this)
      })

    this.elems['basket-section'].querySelectorAll('#basket-incr')
      .forEach(btn => btn.onclick = basketIncrBtnCallback.bind(this))
  }

  disconnectedCallback () {
    this.section.innerHTML = basketTemplate

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

customElements.define('basket-products', BasketComp)

export const basketProd = document.createElement('basket-products')
