import {
  checkBasketProducts,
  currentUser,
} from '../../../helpers'

import { favoriteProducts } from '../../../helpers/components/favorite/favoriteProducts'
import { signOutClearInfo } from '../../../helpers/components/signOutClearInfo'
import { basketProducts } from '../../../helpers/components/basket/basketProducts'
import { checkFavoriteProducts } from '../../../helpers/components/favorite/checkFavoriteProducts'

export function signOutCallback () {
  sessionStorage.removeItem('currentUser')
  sessionStorage.removeItem('favorite')
  sessionStorage.removeItem('basket')
  sessionStorage.removeItem('order-history')

  signOutClearInfo(currentUser)
  signOutClearInfo(favoriteProducts)
  signOutClearInfo(basketProducts)

  this.setAttribute('entered', 'false')

  this.setProfileParams()

  if (document.title === 'Catalog') {
    for (let i = 0; i < window[Symbol.for('catalog-products')].length; i++) {
      window[Symbol.for('catalog-products')][i]
        .setAttribute('favorite', checkFavoriteProducts(window[Symbol.for('catalog-products')][i].product))

      window[Symbol.for('catalog-products')][i]
        .setAttribute('basket', checkBasketProducts(window[Symbol.for('catalog-products')][i].product))
    }
  } else if (document.title === 'Product') {
    const product = require('../../../helpers/pages/productPage/currentProduct').currentProduct

    document.getElementById('favorite-btn').textContent = checkFavoriteProducts(product)
      ? 'Видалити з бажаного'
      : 'В бажане'

    document.getElementById('basket-btn').textContent = checkBasketProducts(product)
      ? 'В кошику'
      : 'Купити'
  }
}
