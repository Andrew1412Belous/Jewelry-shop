import { basketProducts } from './basketProducts'
import { patchUser } from '../../fetch/patchUser'
import { currentUser } from '../profile/currentUser'

export function addToBasket (product) {
  basketProducts.push(product)
  console.log(basketProducts)
  sessionStorage.setItem('basket', JSON.stringify(basketProducts))

  patchUser(currentUser.id, {
    basketProducts,
  })
    .then(response => {
      Object.assign(currentUser, response)

      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    })
}
