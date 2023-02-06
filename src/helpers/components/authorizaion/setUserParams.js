const setProductsParams = require('../setProductsParams').setProductsParams

export function setUserParams (user) {
  if (user.orderHistoryProducts) {
    const orderHistoryProducts = require('../orderHistory/orderHistoryProducts').orderHistoryProducts

    sessionStorage.setItem('order-history', JSON.stringify(user.orderHistoryProducts))

    user.orderHistoryProducts
      .forEach(order => orderHistoryProducts.push(order))
  }

  if (user.favoriteProducts) {
    const favoriteProducts = require('../favorite/favoriteProducts').favoriteProducts

    sessionStorage.setItem('favorite', JSON.stringify(user.favoriteProducts))

    user.favoriteProducts.forEach(product => favoriteProducts.push(product))
  }

  if (user.basketProducts) {
    const basketProducts = require('../basket/basketProducts').basketProducts

    sessionStorage.setItem('basket', JSON.stringify(user.basketProducts))

    user.basketProducts.forEach(product => basketProducts.push(product))
  }

  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    setProductsParams(document.querySelectorAll('product-card'))
  }
}
