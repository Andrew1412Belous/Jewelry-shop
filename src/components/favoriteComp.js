import {
  addElem, checkBasketProducts,
  getElemsByIdFromShadow, getProduct,
  insertFavoriteProducts,
  toggleDisplayMain,
} from '../helpers'

import { favoriteStyle, favoriteTemplate } from '../templates'
import { favoriteElemNames, headerElems, products } from '../configs'

import {
  favoriteAddToBasketCallback,
  favoriteBackBtnCallback,
  favoriteDeleteProductCallback,
} from '../callbacks'

import { favoriteProducts } from '../helpers/favorite/favoriteProducts'
import { checkFavoriteProducts } from '../helpers/favorite/checkFavoriteProducts'
import { currentProduct } from '../helpers/productPage/currentProduct'

class FavoriteComp extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'favorite-section',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: favoriteStyle,
    })
    this.section.innerHTML = favoriteTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    insertFavoriteProducts(this.section)

    this.elems = this.addElems(favoriteElemNames)

    this.elems['close-btn'].onclick = function () {
      toggleDisplayMain(false)
      headerElems.main.innerHTML = ''
    }

    this.elems['back-btn'].onclick = favoriteBackBtnCallback.bind(this)

    this.elems['favorite-section'].querySelectorAll('#delete-favorite')
      .forEach(btn => {
        btn.onclick = favoriteDeleteProductCallback.bind(this)
      })

    this.elems['favorite-section'].querySelectorAll('#add-basket-btn')
      .forEach((btn, index) => {
        checkBasketProducts(btn, favoriteProducts[index], 'favorite')

        btn.onclick = favoriteAddToBasketCallback.bind(this)
      })
  }

  disconnectedCallback () {
    this.section.innerHTML = favoriteTemplate

    if (document.title === 'Catalog') {
      document.querySelectorAll('.product-favorite')
        .forEach((btn, index) => {
          checkFavoriteProducts(btn, getProduct(products[index]), 'catalog-page')
        })

      document.querySelectorAll('.product-btn')
        .forEach((btn, index) => {
          checkBasketProducts(btn, getProduct(products[index]), 'catalog-page')
        })
    } else if (document.title === 'Product') {
      checkFavoriteProducts(document.getElementById('favorite-btn'), currentProduct, 'product-page')
      checkBasketProducts(document.getElementById('basket-btn'), currentProduct, 'product-page')
    }
  }
}

customElements.define('favorite-products', FavoriteComp)

export const favProd = document.createElement('favorite-products')
