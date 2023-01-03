import { favoriteProducts } from './favoriteProducts'
import { patchUser } from '../fetch/patchUser'
import { currentUser } from '../profile/currentUser'

export function addToFavorite (product) {
  favoriteProducts.push(product)

  sessionStorage.setItem('favorite', JSON.stringify(favoriteProducts))

  patchUser(currentUser.id, {
    favoriteProducts,
  })
    .then(response => {
      Object.assign(currentUser, response)

      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    })
}
