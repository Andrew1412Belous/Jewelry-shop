import { checkFavoriteProducts } from '../../components/favorite/checkFavoriteProducts'
import { checkBasketProducts } from '../../components/basket/checkBasketProducts'

const productCard = require('../../../components/index').productCard

export function createProductCards (products, wrapper, productCards) {
  for (let i = 0; i < products.length; i++) {
    const product = new productCard(products[i])

    wrapper.appendChild(product)

    product.setAttribute('favorite', checkFavoriteProducts(products[i]))
    product.setAttribute('basket', checkBasketProducts(products[i]))
    product.setAttribute('data-price', products[i].price)

    productCards.push(product)
  }
}
