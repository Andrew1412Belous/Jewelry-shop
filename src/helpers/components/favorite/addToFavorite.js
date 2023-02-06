const favoriteProducts = require('./favoriteProducts').favoriteProducts
const currentUser = require('../profile/currentUser').currentUser
const patchUser = require('../../fetch/patchUser').patchUser

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
