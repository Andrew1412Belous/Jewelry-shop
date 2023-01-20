import { basketProducts } from './basketProducts'

export function checkBasketProducts (product) {
  const lodash = require('lodash')



  const selectedProduct = {}
  const products = basketProducts.map(item => {
    const res = {}

    for (const key in item) {
      if (key !== 'count') {
        Object.assign(res, { [key]: item[key] })
      }
    }

    return res
  })

  for (const key in product) {
    if (key !== 'filters') {
      Object.assign(selectedProduct, {
        [key]: product[key],
      })
    }
  }

  return products
    .some(item => lodash.isEqual(item, selectedProduct))
    ? 'true'
    : ''
}
