const {
  filterButtons,
  prices,
  filterShowButtons,
  filterClearButtons,
} = require('../../../configs')

const {
  filterPriceInputCallback,
  filterButtonCallback,
  filterShowBtnCallback,
  filterClearBtnCallback,
  showMoreProductsBtnCallback,
} = require('../../../callbacks')

export function catalogPageFunction () {
  const showMoreBtn = document.getElementById('show-more-btn')
  const wrapper = document.querySelector('.products-wrapper')
  const productCards = []

  require('./checkProductsStorage').checkProductsStorage(wrapper, productCards)
    .then(() => {
      require('./checkFilters').checkFilters(productCards, showMoreBtn)

      window[Symbol.for('catalog-products')] = document
        .querySelectorAll('product-card')

      prices.priceNames.forEach(input => {
        prices.priceElems[input].oninput = filterPriceInputCallback
      })

      filterButtons.buttonsNames.forEach(btn => {
        filterButtons.buttonsElems[btn].onclick = filterButtonCallback
      })

      filterShowButtons.showButtonsNames
        .forEach(button => {
          filterShowButtons.showButtonsElems[button]
            .onclick = filterShowBtnCallback.bind(this, productCards, showMoreBtn)
        })

      filterClearButtons.clearButtonsNames
        .forEach(button => {
          filterClearButtons.clearButtonsElems[button]
            .onclick = filterClearBtnCallback
        })

      document.getElementById('show-more-btn')
        .onclick = showMoreProductsBtnCallback.bind(this, productCards)
    })
}
