import { filteredProducts } from '../../../configs'
import { setMoreProductsBtnMode } from '../../../helpers'

export function showMoreProductsBtnCallback (products, event) {
  filteredProducts.length
    ? setMoreProductsBtnMode(filteredProducts, event.target)
    : setMoreProductsBtnMode(products, event.target)
}
