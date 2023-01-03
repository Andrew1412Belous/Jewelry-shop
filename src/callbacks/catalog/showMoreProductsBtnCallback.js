import {
  filteredProducts,
  products,
} from '../../configs'

import { setMoreProductsBtnMode } from '../../helpers'

export function showMoreProductsBtnCallback () {
  // eslint-disable-next-line max-len
  filteredProducts.length ? setMoreProductsBtnMode(filteredProducts) : setMoreProductsBtnMode(products)
}
