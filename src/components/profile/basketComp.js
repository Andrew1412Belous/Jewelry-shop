import { basketElemNames } from '../../configs/index'

const {
  addElem,
  insertBasketProducts,
  basketProducts,
  getElemsByIdFromShadow,
} = require('../../helpers/index')

const {
  basketTemplate,
  basketStyle,
} = require('../../templates/index')

const {
  hideUpdatingComp,
  basketDeleteProductCallback,
  buyProductsCallback,
  showProductPageCallback,
  basketDecrBtnCallback,
  basketIncrBtnCallback,
} = require('../../callbacks/index')

export class BasketComp extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'basket-section-wrapper',
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: basketStyle,
    })

    this.section.innerHTML = basketTemplate
    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-basket', () => {
      this.section.style.display = 'block'

      insertBasketProducts(this.section)

      this.elems = this.getElemsById(basketElemNames)

      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, basketTemplate)
      this.elems.shadow.onclick = hideUpdatingComp.bind(this, basketTemplate)

      this.elems['basket-section'].querySelectorAll('#delete-basket-product-btn')
        .forEach(btn => btn.onclick = basketDeleteProductCallback.bind(this))

      if (basketProducts.length) {
        this.elems['buy-all-products-btn'].onclick = buyProductsCallback.bind(this, basketTemplate)
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
    })
  }
}

customElements.define('basket-products', BasketComp)
