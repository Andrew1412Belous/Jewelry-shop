const { filterElems } = require('../../../configs/index')
const priceElems = require('../../../configs/pages/catalogPage/prices').priceElems

export function checkFilters (products, btn) {
  const priceTest = sessionStorage.getItem('price')
  const filtersTest = sessionStorage.getItem('filters')

  if (priceTest) {
    const prices = JSON.parse(sessionStorage.getItem('price'))

    priceElems['price-from'].value = prices[0]
    priceElems['price-to'].value = prices[1]
  }

  if (filtersTest) {
    const result = []

    JSON.parse(sessionStorage.getItem('filters'))
      .forEach(category => category
        .forEach(filter => result.push(filter)))

    filterElems
      .forEach((category, index) => {
        result.forEach(filter => {
          if (filterElems[index][filter]) filterElems[index][filter].checked = true
        })
      })
  }

  const filters = require('./setFiltersParam').setFiltersParam()

  if (priceTest && filtersTest) {
    require('./sortByPriceAndFilters').sortByPriceAndFilters(filters, products, btn)
  } else if (filtersTest && !priceTest) {
    require('./sortByFilters').sortByFilters(filters, products, btn)
  } else if (priceTest && !filtersTest) {
    require('./sortByPrice').sortByPrice(products, btn)
  } else {
    require('./showProducts').showProducts(products, btn)
  }
}
