const { productCard } = require('../../../components/index')

export function showOtherProducts (otherProducts, productsWrapper) {
  for (let i = 0; i < 3; i++) {
    const product = new productCard(otherProducts[i])

    productsWrapper.appendChild(product)

    product.setAttribute('favorite', require('../../components/favorite/checkFavoriteProducts')
      .checkFavoriteProducts(otherProducts[i]))
    product.setAttribute('basket', require('../../components/basket/checkBasketProducts')
      .checkBasketProducts(otherProducts[i]))
    product.setAttribute('data-price', otherProducts[i].price)

    product.classList.toggle('hide')
    product.classList.toggle('show')
  }
}
