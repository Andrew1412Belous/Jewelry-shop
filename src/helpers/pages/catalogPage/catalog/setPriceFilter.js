import { priceElems } from '../../../../configs'

export function setPriceFilter (product) {
  console.log(Number(product.dataset.price))

  return Number(priceElems['price-from'].value) <= Number(product.dataset.price)
    && Number(product.dataset.price) <= Number(priceElems['price-to'].value)
}
