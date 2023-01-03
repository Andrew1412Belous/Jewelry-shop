import { addToBasket, getProduct, updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { basketProd } from '../../components'

export function favoriteAddToBasketCallback (event) {
  const selectedProduct = getProduct(event.target.parentNode.parentNode
    .querySelector('.favorite-product-info'))

  if (event.target.textContent === 'Купити') {
    addToBasket(selectedProduct)

    event.target.textContent = 'В кошику'
  } else {
    updateMainContent(headerElems.main, basketProd)
  }
}
