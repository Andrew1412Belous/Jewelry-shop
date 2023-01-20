import {
  filterElems, priceElems,
} from '../../../../configs'

import { setFiltersParam } from './setFiltersParam'
import { sortByFilters } from './sortByFilters'
import { showProducts } from './showProducts'
import { sortByPriceAndFilters } from './sortByPriceAndFilters'

export function checkFilters (products, btn) {
  if (sessionStorage.getItem('filters')) {
    const result = []

    JSON.parse(sessionStorage.getItem('filters'))
      .forEach(category => category
        .forEach(filter => result.push(filter)))

    filterElems
      .forEach((category, index) => {
        result.forEach(filter => {
          if (filterElems[index][filter]) {
            filterElems[index][filter].checked = true
          }
        })
      })

    const filters = setFiltersParam()

    if (sessionStorage.getItem('price')) {
      const prices = JSON.parse(sessionStorage.getItem('price'))

      priceElems['price-from'].value = prices[0]
      priceElems['price-to'].value = prices[1]

      sortByPriceAndFilters(filters, products, btn)
    } else {
      sortByFilters(filters, products, btn)
    }
  } else {
    showProducts(products, btn)
  }
}
