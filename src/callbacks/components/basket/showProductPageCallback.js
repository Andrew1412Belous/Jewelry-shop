import { getProduct,  } from '../../../helpers'
import { headerElems } from '../../../configs'

export function showProductPageCallback (event) {
  const selectedProduct = getProduct(event.target.parentNode.parentNode
    .querySelector('.basket-product-info'))

  sessionStorage.setItem('currentProduct', JSON.stringify(selectedProduct))

  document.location = './product-page.html'

  (false)
  headerElems.main.innerHTML = ''
}
