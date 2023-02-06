const { productStyle } = require('../../templates/index')

const {
  addElem,
  setPriceType,
  getElemsByIdFromShadow,
  setFilterClass,
} = require('../../helpers/index')

const {
  productMouseEnterCallback,
  productMouseLeaveCallback,
  productPriceCallback,
  addToFavoriteCallback,
} = require('../../callbacks/index')

export class ProductCard extends HTMLElement {
  constructor(product) {
    super()
    this.product = product
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('div', this.shadow), {
      id: 'product-section',
      className: 'product-card',
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: productStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  static get observedAttributes () {
    return [
      'favorite',
      'basket',
    ]
  }

  setFavoriteIconDisplay () {
    this.elems['product-favorite'].style.display = this.getAttribute('favorite')
      ? 'none'
      : 'block'
  }

  setBasketBtnContent () {
    this.elems['product-price'].textContent = this.getAttribute('basket')
      ? 'В кошику'
      : setPriceType(this.product.price)
  }

  attributeChangedCallback (attrName) {
    attrName === 'favorite'
      ? this.setFavoriteIconDisplay()
      : this.setBasketBtnContent()
  }

  connectedCallback () {
    require('../../helpers/components/productCard/insertProductCardTemplate').insertProductCardTemplate.bind(this)()
    setFilterClass.bind(this)()

    this.elems = this.getElemsById(require('../../configs/index')
      .productCardElemNames)

    this.elems['product-favorite'].onclick = addToFavoriteCallback.bind(this)
    this.elems['product-price'].onclick = productPriceCallback.bind(this)
    this.elems['product-price'].onmouseenter = productMouseEnterCallback
    this.elems['product-price'].onmouseleave = productMouseLeaveCallback.bind(this)
  }
}

customElements.define('product-card', ProductCard)
