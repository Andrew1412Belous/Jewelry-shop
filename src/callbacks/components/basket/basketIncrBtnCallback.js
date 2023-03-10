const {
  basketProducts,
  getProduct,
  currentUser,
} = require('../../../helpers/index')

export function basketIncrBtnCallback (event) {
  event.target.parentNode.querySelector('#basket-decr').disabled = false

  const wrapper = event.target.parentNode.parentNode.parentNode.querySelector('.basket-product-info')

  const selectedProduct = getProduct.bind(wrapper, wrapper)()

  const countElem = event.target.parentNode.querySelector('#basket-count')
  let countProducts = Number(countElem.textContent)

  if (countProducts < 100) {
    if (countProducts >= 2) {
      Object.assign(selectedProduct, {
        count: countProducts,
      })
    }

    for (const product of basketProducts) {
      if (JSON.stringify(product) === JSON.stringify(selectedProduct)) {
        Object.assign(product, {
          count: ++countProducts,
        })
      }
    }

    sessionStorage.setItem('basket', JSON.stringify(basketProducts))

    require('../../../helpers/fetch/patchUser').patchUser(currentUser.id, {
      basketProducts,
    })
      .then(response => {
        Object.assign(currentUser, response)

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      })

    countElem.textContent = countProducts
  } else {
    event.target.disabled = true
  }
}
