import { mainPageCallback } from '../../callbacks/pages/mainPage/mainPageCallback'
import { catalogPageCallback } from '../../callbacks/pages/catalogPage/catalogPageCallback'
import { productPageCallback } from '../../callbacks/pages/productPage/productPageCallback'

export function setPageCallbacks (title) {
  if (title === 'Jewelry shop') {
    mainPageCallback()
  } else if (title === 'Catalog') {
    catalogPageCallback()
  } else if (title === 'Product') {
    productPageCallback()
  }
}
