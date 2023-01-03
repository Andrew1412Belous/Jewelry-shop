import {
  filterElems, priceElems,
  products,
} from '../../configs'

import { setFiltersParam } from './setFiltersParam'
import { sortByFilters } from './sortByFilters'
import { showProducts } from './showProducts'
import {sortByPriceAndFilters} from './sortByPriceAndFilters'

export function checkFilters () {
  if (sessionStorage.getItem('filters')) {
    JSON.parse(sessionStorage.getItem('filters'))
      .forEach(filter => filterElems[filter].checked = true)

    const filters = setFiltersParam()

    if (sessionStorage.getItem('price')) {
      const prices = JSON.parse(sessionStorage.getItem('price'))

      priceElems['price-from'].value = prices[0]
      priceElems['price-to'].value = prices[1]

      sortByPriceAndFilters(filters)
    } else {
      sortByFilters(filters)
    }
  } else {
    showProducts(products)
  }
}
