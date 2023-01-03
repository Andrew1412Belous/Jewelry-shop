import { hideProducts } from './hideProducts'

import {
  filteredProducts,
  products,
} from '../../configs'

import { showProducts } from './showProducts'
import { setPriceFilter } from './setPriceFilter'

export function sortByPriceAndFilters (filters) {
  hideProducts()

  for (let i = 0; i < products.length; i++) {
    const test = filters
      .every(filter => products[i].classList.contains(filter) && setPriceFilter(products[i]))

    if (test) {
      filteredProducts.push(products[i])
    }
  }

  showProducts(filteredProducts)
}
