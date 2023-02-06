const {
  currentUser,
  basketProducts,
} = require('../../../helpers/index')

export function deleteFromBasket (product) {
  for (let i = 0; i < basketProducts.length; i++) {
    if (JSON.stringify(basketProducts[i]) === JSON.stringify(product)) {
      basketProducts.splice(i, 1)
      break
    }
  }

  if (basketProducts.length) {
    sessionStorage.setItem('basket', JSON.stringify(basketProducts))

    require('../../../helpers/index').patchUser(currentUser.id, {
      basketProducts,
    })
      .then(response => {
        Object.assign(currentUser, response)

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      })
  } else {
    delete currentUser.basketProducts

    require('../../../helpers/index').putUser(currentUser.id, currentUser)
      .then(response => {
        sessionStorage.setItem('currentUser', JSON.stringify(response))
        sessionStorage.removeItem('basket')
      })
  }
}
