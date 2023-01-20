import {
  isInputEmpty,
  hideProducts,
  setFiltersParam,
  showProducts,
  sortByFilters,
  sortByPrice,
  sortByPriceAndFilters, checkInputsEquality, setPriceInputsParams,
} from '../../../helpers'

import {
  filterBlocks,
  filteredProducts,
  priceElems,
} from '../../../configs'

export function filterShowBtnCallback (products, btn, event) {
  filteredProducts.splice(0, filteredProducts.length)

  document.getElementById('product-message').innerText = ''

  const listName = event.target.id.split('-')[0]
  const priceIndicated = isInputEmpty([priceElems['price-to'], priceElems['price-from']])
  const priceCorrect = checkInputsEquality(priceElems['price-from'], priceElems['price-to'])
  const filters = setFiltersParam()

  if (!priceCorrect) {
    setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#ea3838')

    if (listName !== 'price') {
      filterBlocks[`${listName}-block`].classList.add('filter-list-hide')
      filterBlocks[`${listName}-block`].classList.remove('filter-list-show')

      filterBlocks['price-block'].classList.toggle('filter-list-hide')
      filterBlocks['price-block'].classList.toggle('filter-list-show')
    }
  } else {
    const test = filters.some(category => category.length)

    if (test && !priceIndicated) {
      sortByFilters(filters, products, btn)
    } else if (priceIndicated && !filters.length) {
      setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#50a450')

      sortByPrice(products, btn)
    } else if (test && priceIndicated) {
      setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#50a450')

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
}
