import { getProduct } from '../../../helpers'
import { deleteFromBasket } from './deleteFromBasket'
import { basketProducts } from '../../../helpers/components/basket/basketProducts'

export function basketDeleteProductCallback (event) {
  const countProducts = Number(event.target.parentNode.querySelector('#basket-count').textContent)

  const wrapper = event.target.parentNode.parentNode.querySelector('.basket-product-info')

  const selectedProduct = countProducts === 1
    ? getProduct.bind(wrapper, wrapper)()
    : Object.assign(getProduct.bind(wrapper, wrapper)(), {
      count: countProducts,
    })

  console.log(selectedProduct)

  deleteFromBasket(selectedProduct)

  event.target.parentNode.parentNode.remove()

  if (!basketProducts.length) insertBasketProducts(this.section)
}
