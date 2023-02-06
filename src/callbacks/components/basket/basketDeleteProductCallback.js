const deleteFromBasket = require('./deleteFromBasket').deleteFromBasket

const {
  getProduct,
  basketProducts,
} = require('../../../helpers/index')

export function basketDeleteProductCallback (event) {
  const countProducts = Number(event.target.parentNode.querySelector('#basket-count').textContent)

  const wrapper = event.target.parentNode.parentNode.querySelector('.basket-product-info')

  const selectedProduct = countProducts === 1
    ? getProduct.bind(wrapper, wrapper)()
    : Object.assign(getProduct.bind(wrapper, wrapper)(), {
      count: countProducts,
    })

  deleteFromBasket(selectedProduct)

  event.target.parentNode.parentNode.remove()

  if (!basketProducts.length) require('../../../helpers/index').insertBasketProducts(this.section)
}
