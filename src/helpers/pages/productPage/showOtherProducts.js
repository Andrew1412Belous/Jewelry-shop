const { productCard } = require('../../../components/index')
const checkFavoriteProducts = require('../../components/favorite/checkFavoriteProducts').checkFavoriteProducts
const checkBasketProducts = require('../../components/basket/checkBasketProducts').checkBasketProducts

export function showOtherProducts (otherProducts, productsWrapper) {
  for (let i = 0; i < 3; i++) {
    const product = new productCard(otherProducts[i])

    productsWrapper.appendChild(product)

    product.setAttribute('favorite', checkFavoriteProducts(otherProducts[i]))
    product.setAttribute('basket', checkBasketProducts(otherProducts[i]))
    product.setAttribute('data-price', otherProducts[i].price)

    product.classList.toggle('hide')
    product.classList.toggle('show')
  }
}
