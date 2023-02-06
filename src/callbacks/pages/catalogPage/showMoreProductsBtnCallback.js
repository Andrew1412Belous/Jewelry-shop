const { setMoreProductsBtnMode } = require('../../../helpers/index')
const { filteredProducts } = require('../../../configs/index')

export function showMoreProductsBtnCallback (products, event) {
  filteredProducts.length
    ? setMoreProductsBtnMode(filteredProducts, event.target)
    : setMoreProductsBtnMode(products, event.target)
}
