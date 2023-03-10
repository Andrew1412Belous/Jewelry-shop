const priceElems = require('../../../configs/pages/catalogPage/prices').priceElems

export function setPriceFilter (product) {
  return Number(priceElems['price-from'].value) <= Number(product.dataset.price)
    && Number(product.dataset.price) <= Number(priceElems['price-to'].value)
}
