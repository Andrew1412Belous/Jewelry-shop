import { favoriteProducts } from './favoriteProducts'

export function checkFavoriteProducts (product) {
  // if (!favoriteProducts.length) return ''

  const lodash = require('lodash')

  const selectedProduct = {}

  for (const key in product) {
    if (key !== 'filters') {
      Object.assign(selectedProduct, {
        [key]: product[key],
      })
    }
  }

  return favoriteProducts
    .some(item => lodash.isEqual(item, selectedProduct))
    ? 'true'
    : ''
}
