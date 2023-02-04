const checkFavoriteProducts = require('./favorite/checkFavoriteProducts').checkFavoriteProducts
const checkBasketProducts = require('./basket/checkBasketProducts').checkBasketProducts

export function setProductsParams (products) {
  for (let i = 0; i < products.length; i++) {
    products[i]
      .setAttribute('favorite', checkFavoriteProducts(products[i].product))

    products[i]
      .setAttribute('basket', checkBasketProducts(products[i].product))
  }

  if (document.title === 'Product') {
    const product = require('../pages/productPage/currentProduct').currentProduct

    document.getElementById('favorite-btn').textContent = checkFavoriteProducts(product)
      ? 'Видалити з бажаного'
      : 'В бажане'

    document.getElementById('basket-btn').textContent = checkBasketProducts(product)
      ? 'В кошику'
      : 'Купити'
  }
}
