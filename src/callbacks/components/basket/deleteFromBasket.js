import { currentUser, patchUser, putUser } from '../../../helpers'
import { basketProducts } from '../../../helpers/components/basket/basketProducts'

export function deleteFromBasket (product) {
  for (let i = 0; i < basketProducts.length; i++) {
    if (JSON.stringify(basketProducts[i]) === JSON.stringify(product)) {
      basketProducts.splice(i, 1)
      break
    }
  }

  if (basketProducts.length) {
    sessionStorage.setItem('basket', JSON.stringify(basketProducts))

    patchUser(currentUser.id, {
      basketProducts,
    })
      .then(response => {
        Object.assign(currentUser, response)

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      })
  } else {
    delete currentUser.basketProducts

    putUser(currentUser.id, currentUser)
      .then(response => {
        sessionStorage.setItem('currentUser', JSON.stringify(response))
        sessionStorage.removeItem('basket')
      })
  }
}
