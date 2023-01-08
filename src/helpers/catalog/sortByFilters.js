import { hideProducts } from './hideProducts'

import {
  filteredProducts,
  products,
} from '../../configs'

import { showProducts } from './showProducts'

export function sortByFilters (filters) {
  hideProducts()

  for (let i = 0; i < products.length; i++) {
    const test = filters
      .every(category => category
        .some(filter => products[i].classList.contains(filter)))

    if (test) {
      console.log(products[i])
      filteredProducts.push(products[i])
    }
  }

  showProducts(filteredProducts)
}
