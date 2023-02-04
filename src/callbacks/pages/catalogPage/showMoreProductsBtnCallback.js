const setMoreProductsBtnMode = require('../../../helpers/pages/catalogPage/setMoreProductsBtnMode')
  .setMoreProductsBtnMode

const filteredProducts = require('../../../configs/pages/catalogPage/filteredProducts').filteredProducts

export function showMoreProductsBtnCallback (products, event) {
  filteredProducts.length
    ? setMoreProductsBtnMode(filteredProducts, event.target)
    : setMoreProductsBtnMode(products, event.target)
}
