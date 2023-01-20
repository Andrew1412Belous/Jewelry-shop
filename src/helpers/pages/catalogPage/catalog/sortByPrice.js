import { hideProducts } from './hideProducts'

import {
  filteredProducts,
} from '../../../../configs'

import { showProducts } from './showProducts'
import { setPriceFilter } from './setPriceFilter'

export function sortByPrice (products, btn) {
  hideProducts(products)

  for (let i = 0; i < products.length; i++) {
    const test = setPriceFilter(products[i])

    if (test) {
      filteredProducts.push(products[i])
    }
  }

  showProducts(filteredProducts, btn)
}
