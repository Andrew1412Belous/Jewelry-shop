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
} from '../../configs'

export function filterShowBtnCallback (products, btn, event) {
  filteredProducts.splice(0, filteredProducts.length)

  document.getElementById('product-message').innerText = ''

  const listName = event.target.id.split('-')[0]
  const priceIndicated = checkInputs([priceElems['price-to'], priceElems['price-from']])
  const filters = setFiltersParam()
  const test = filters.some(category => category.length)

  console.log(filters)

  if (test && !priceIndicated) {
    sortByFilters(filters, products, btn)
    console.log(20)
  } else if (priceIndicated && !filters.length) {
    console.log(20)
    sortByPrice(products, btn)
  } else if (test && priceIndicated) {
    console.log(30)
    sortByPriceAndFilters(filters, products, btn)
  } else {
    hideProducts(products)
    showProducts(products, btn)
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
