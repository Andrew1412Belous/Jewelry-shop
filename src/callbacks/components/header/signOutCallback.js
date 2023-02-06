const {
  favoriteProducts,
  basketProducts,
  orderHistoryProducts,
  setProductsParams,
  signOutClearInfo,
  currentUser,
} = require('../../../helpers/index')

export function signOutCallback () {
  sessionStorage.removeItem('currentUser')
  sessionStorage.removeItem('favorite')
  sessionStorage.removeItem('order-history')
  sessionStorage.removeItem('basket')

  signOutClearInfo(currentUser)
  signOutClearInfo(orderHistoryProducts)
  signOutClearInfo(favoriteProducts)
  signOutClearInfo(basketProducts)

  this.setAttribute('entered', 'false')

  this.setProfileParams()

  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    setProductsParams(document.querySelectorAll('product-card'))
  }
}
