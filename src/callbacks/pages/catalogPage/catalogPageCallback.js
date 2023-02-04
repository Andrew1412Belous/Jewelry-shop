const filterButtons = require('../../../configs/pages/catalogPage/filterButtons')
const prices = require('../../../configs/pages/catalogPage/prices')
const filterShowButtons = require('../../../configs/pages/catalogPage/filterShowBtns')
const filterClearButtons = require('../../../configs/pages/catalogPage/filterClearBtns')

export function catalogPageCallback () {
  const showMoreBtn = document.getElementById('show-more-btn')
  const wrapper = document.querySelector('.products-wrapper')
  const productCards = []

  require('../../../helpers/pages/catalogPage/checkProductsStorage')
    .checkProductsStorage(wrapper, productCards)
    .then(() => {
      require('../../../helpers/pages/catalogPage/checkFilters').checkFilters(productCards, showMoreBtn)

      window[Symbol.for('catalog-products')] = document
        .querySelectorAll('product-card')

      prices.priceNames.forEach(input => {
        prices.priceElems[input].oninput = require('./filterPriceInputCallback').filterPriceInputCallback
      })

      filterButtons.buttonsNames.forEach(btn => {
        filterButtons.buttonsElems[btn].onclick = require('./filterButtonCallback').filterButtonCallback
      })

      filterShowButtons.showButtonsNames
        .forEach(button => {
          filterShowButtons.showButtonsElems[button]
            .onclick = require('./filterShowBtnCallback')
              .filterShowBtnCallback.bind(this, productCards, showMoreBtn)
        })

      filterClearButtons.clearButtonsNames
        .forEach(button => {
          filterClearButtons.clearButtonsElems[button]
            .onclick = require('./filterClearBtnCallback').filterClearBtnCallback
        })

      document.getElementById('show-more-btn')
        .onclick = require('./showMoreProductsBtnCallback')
          .showMoreProductsBtnCallback.bind(this, productCards)
    })
}
