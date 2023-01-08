import {
  checkInputs,
  hideProducts,
  setFiltersParam,
  showProducts,
  sortByFilters,
  sortByPrice,
  sortByPriceAndFilters,
} from '../../helpers'

import {
  filterBlocks,
  filteredProducts,
  priceElems,
  products,
} from '../../configs'

export function filterShowBtnCallback (event) {
  filteredProducts.splice(0, filteredProducts.length)

  document.getElementById('product-message').innerText = ''

  const listName = event.target.id.split('-')[0]
  const priceIndicated = checkInputs([priceElems['price-to'], priceElems['price-from']])
  const filters = setFiltersParam()
  const test = filters.some(category => category.length)

  console.log(filters)

  if (test && !priceIndicated) {
    sortByFilters(filters)
  } else if (priceIndicated && !filters.length) {
    sortByPrice()
  } else if (test && priceIndicated) {
    sortByPriceAndFilters(filters)
  } else {
    hideProducts()
    showProducts(products)
  }

  filterBlocks[`${listName}-block`].classList.toggle('filter-list-hide')
  filterBlocks[`${listName}-block`].classList.toggle('filter-list-show')

  test
    ? sessionStorage.setItem('filters', JSON.stringify(filters
      .map(category => category
        .map(filter => `${filter}-checkbox`))))
    : sessionStorage.removeItem('filters')

  if (priceIndicated) {
    sessionStorage.setItem('price', JSON.stringify([priceElems['price-from'].value, priceElems['price-to'].value]))
  }
}
