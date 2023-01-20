import { mainPageCallback } from '../pages/mainPageCallback'
import { catalogPageCallback } from '../pages/catalogPageCallback'
import { productPageCallback } from '../pages/productPageCallback'

export function setPageCallbacks (title) {
  if (title === 'Jewelry shop') {
    mainPageCallback()
  } else if (title === 'Catalog') {
    catalogPageCallback()
  } else if (title === 'Product') {
    productPageCallback()
  }
}
