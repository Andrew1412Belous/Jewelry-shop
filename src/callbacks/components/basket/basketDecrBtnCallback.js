const {
  currentUser,
  getProduct,
  basketProducts,
  patchUser,
} = require('../../../helpers/index')

export function basketDecrBtnCallback (event) {
  const wrapper = event.target.parentNode.parentNode.parentNode.querySelector('.basket-product-info')

  const countElem = event.target.parentNode.querySelector('#basket-count')
  let countProducts = Number(countElem.textContent)

  const selectedProduct = Object.assign(getProduct.bind(wrapper, wrapper)(), {
    count: countProducts,
  })

  for (const product of basketProducts) {
    if (JSON.stringify(product) === JSON.stringify(selectedProduct)) {
      if (countProducts === 2) {
        delete product.count

        countProducts--
        event.target.disabled = true
      } else if (countProducts > 2) {
        Object.assign(product, {
          count: --countProducts,
        })
      }
    }
  }

  sessionStorage.setItem('basket', JSON.stringify(basketProducts))

  patchUser(currentUser.id, {
    basketProducts,
  })
    .then(response => {
      Object.assign(currentUser, response)

      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    })

  countElem.textContent = countProducts
}
