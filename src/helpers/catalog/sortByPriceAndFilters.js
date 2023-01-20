import { hideProducts } from './hideProducts'

import {
  filteredProducts,
} from '../../configs'

import { showProducts } from './showProducts'
import { setPriceFilter } from './setPriceFilter'

export function sortByPriceAndFilters (filters, products, btn) {
  hideProducts(products)

  for (let i = 0; i < products.length; i++) {
    const test = filters
      .every(category => category
        .some(filter => products[i].classList.contains(filter)) && setPriceFilter(products[i]))

    console.log(test)
    if (test) {
      filteredProducts.push(products[i])
    }
  }

  showProducts(filteredProducts, btn)
}
