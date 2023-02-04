const filteredProducts = require('../../../configs/pages/catalogPage/filteredProducts').filteredProducts
const filterBlocksElems = require('../../../configs/pages/catalogPage/filterBlocks').blocksElems
const priceElems = require('../../../configs/pages/catalogPage/prices').priceElems
const setPriceInputsParams = require('../../../helpers/pages/catalogPage/setPriceInputsParams')
  .setPriceInputsParams

export function filterShowBtnCallback (products, btn, event) {
  filteredProducts.splice(0, filteredProducts.length)

  document.getElementById('product-message').innerText = ''

  const listName = event.target.id.split('-')[0]

  const priceIndicated = require('../../../helpers/validation/forInputs/isInputEmpty')
    .isInputEmpty([priceElems['price-to'], priceElems['price-from']])

  const priceCorrect = require('../../../helpers/validation/forInputs/checkInputsEquality')
    .checkInputsEquality(priceElems['price-from'], priceElems['price-to'])

  const filters = require('../../../helpers/pages/catalogPage/setFiltersParam').setFiltersParam()

  if (!priceCorrect) {
    setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#ea3838')

    if (listName !== 'price') {
      filterBlocksElems[`${listName}-block`].classList.add('filter-list-hide')
      filterBlocksElems[`${listName}-block`].classList.remove('filter-list-show')

      filterBlocksElems['price-block'].classList.toggle('filter-list-hide')
      filterBlocksElems['price-block'].classList.toggle('filter-list-show')
    }
  } else {
    const test = filters.some(category => category.length)

    if (test && !priceIndicated) {
      require('../../../helpers/pages/catalogPage/sortByFilters')
        .sortByFilters(filters, products, btn)
    } else if (priceIndicated && !filters.length) {
      setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#50a450')

      require('../../../helpers/pages/catalogPage/sortByPrice')
        .sortByPrice(products, btn)
    } else if (test && priceIndicated) {
      setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#50a450')

      require('../../../helpers/pages/catalogPage/sortByPriceAndFilters')
        .sortByPriceAndFilters(filters, products, btn)
    } else {
      require('../../../helpers/pages/catalogPage/hideProducts').hideProducts(products)
      require('../../../helpers/pages/catalogPage/showProducts').showProducts(products, btn)
    }

    filterBlocksElems[`${listName}-block`].classList.toggle('filter-list-hide')
    filterBlocksElems[`${listName}-block`].classList.toggle('filter-list-show')

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
