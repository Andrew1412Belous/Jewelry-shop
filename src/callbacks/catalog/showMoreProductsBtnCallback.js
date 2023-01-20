import { filteredProducts } from '../../configs'
import { setMoreProductsBtnMode } from '../../helpers'

export function showMoreProductsBtnCallback (products, event) {
  filteredProducts.length
    ? setMoreProductsBtnMode(filteredProducts)
    : setMoreProductsBtnMode(products)
}
