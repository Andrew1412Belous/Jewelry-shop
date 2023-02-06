const { setPriceInputsParams } = require('../../../helpers/index')

const {
  filteredProducts,
  filterBlocks,
  prices,
} = require('../../../configs/index')

const {
  isInputEmpty,
  checkInputsEquality,
  setFiltersParam,
} = require('../../../helpers/index')

export function filterShowBtnCallback (products, btn, event) {
  filteredProducts.splice(0, filteredProducts.length)

  document.getElementById('product-message').innerText = ''

  const listName = event.target.id.split('-')[0]

  const priceIndicated = isInputEmpty([prices.priceElems['price-to'], prices.priceElems['price-from']])
  const priceCorrect = checkInputsEquality(prices.priceElems['price-from'], prices.priceElems['price-to'])

  const filters = setFiltersParam()

  if (!priceCorrect) {
    setPriceInputsParams([prices.priceElems['price-to'], prices.priceElems['price-from']], '#ea3838')

    if (listName !== 'price') {
      filterBlocks.blocksElems[`${listName}-block`].classList.add('filter-list-hide')
      filterBlocks.blocksElems[`${listName}-block`].classList.remove('filter-list-show')

      filterBlocks.blocksElems['price-block'].classList.toggle('filter-list-hide')
      filterBlocks.blocksElems['price-block'].classList.toggle('filter-list-show')
    }
  } else {
    const test = filters.some(category => category.length)

    if (test && !priceIndicated) {
      require('../../../helpers/index').sortByFilters(filters, products, btn)
    } else if (priceIndicated && !filters.length) {
      setPriceInputsParams([prices.priceElems['price-to'], prices.priceElems['price-from']], '#50a450')

      require('../../../helpers/index').sortByPrice(products, btn)
    } else if (test && priceIndicated) {
      setPriceInputsParams([prices.priceElems['price-to'], prices.priceElems['price-from']], '#50a450')

      require('../../../helpers/index').sortByPriceAndFilters(filters, products, btn)
    } else {
      require('../../../helpers/index').hideProducts(products)
      require('../../../helpers/index').showProducts(products, btn)
    }

    filterBlocks.blocksElems[`${listName}-block`].classList.toggle('filter-list-hide')
    filterBlocks.blocksElems[`${listName}-block`].classList.toggle('filter-list-show')

    test
      ? sessionStorage.setItem('filters', JSON.stringify(filters
        .map(category => category
          .map(filter => `${filter}-checkbox`))))
      : sessionStorage.removeItem('filters')

    if (priceIndicated) {
      sessionStorage.setItem('price', JSON.stringify([prices.priceElems['price-from'].value, prices.priceElems['price-to'].value]))
    }
  }
}
