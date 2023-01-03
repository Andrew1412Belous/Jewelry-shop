import { getProduct } from '../../helpers'
import { deleteFromBasket } from './deleteFromBasket'
import { basketProducts } from '../../helpers/basket/basketProducts'
import { insertBasketProducts } from '../../helpers/basket/insertBasketProducts'

export function basketDeleteProductCallback (event) {
  const countProducts = Number(event.target.parentNode.querySelector('#basket-count').textContent )

  const selectedProduct = countProducts === 1
    ? getProduct(event.target.parentNode.parentNode
      .querySelector('.basket-product-info'))
    : Object.assign(getProduct(event.target.parentNode.parentNode
      .querySelector('.basket-product-info')), {
      count: countProducts,
    })

  deleteFromBasket(selectedProduct)

  event.target.parentNode.parentNode.remove()

  if (!basketProducts.length) insertBasketProducts(this.section)
}
