import { addElem, checkBasketProducts, getElemsByIdFromShadow, getProduct } from '../../helpers'
import { productStyle, productTemplate } from '../../templates'
import { productCardElemNames } from '../../configs/elemNames/catalog/productCardElemNames'
import { addToFavoriteCallback } from '../../callbacks/components/productCard/addToFavoriteCallback'
import { currentProduct } from '../../helpers/productPage/currentProduct'
import { insertProductCardTemplate } from '../../helpers/catalog/insertProductCardTemplate'
import { setFilterClass } from '../../helpers/components/productCard/setFilterClass'
import { setPriceType } from '../../helpers/components/setPriceType'

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
    insertProductCardTemplate.bind(this)()
    setFilterClass.bind(this)()

    this.elems = this.getElemsById(productCardElemNames)

    this.elems['product-favorite'].onclick = addToFavoriteCallback.bind(this)

    this.elems['product-price'].onclick = function () {
      sessionStorage.setItem('currentProduct', JSON.stringify(getProduct.bind(this, this.section)()))

      document.location.href = './product-page.html'
    }.bind(this)

    this.elems['product-price'].onmouseenter = function (event) {
      if (event.target.textContent !== 'В кошику') {
        event.target.textContent = 'Переглянути'
      }
    }

    this.elems['product-price'].onmouseleave = function (event) {
      if (event.target.textContent !== 'В кошику') {
        event.target.textContent = setPriceType(this.product.price)
      }
    }.bind(this)
  }
}

customElements.define('product-card', ProductCard)
