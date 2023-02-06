const currentUser = require('../profile/currentUser').currentUser
const favoriteProducts = require('./favoriteProducts').favoriteProducts

export function deleteFromFavorite (product) {
  for (let i = 0; i < favoriteProducts.length; i++) {
    if (JSON.stringify(favoriteProducts[i]) === JSON.stringify(product)) {
      favoriteProducts.splice(i, 1)
      break
    }
  }

  if (favoriteProducts.length) {
    sessionStorage.setItem('favorite', JSON.stringify(favoriteProducts))

    require('../../fetch/patchUser').patchUser(currentUser.id, {
      favoriteProducts,
    })
      .then(response => {
        Object.assign(currentUser, response)

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      })
  } else {
    delete currentUser.favoriteProducts

    require('../../fetch/putUser').putUser(currentUser.id, currentUser)
      .then(response => {
        sessionStorage.setItem('currentUser', JSON.stringify(response))
        sessionStorage.removeItem('favorite')
      })
  }
}
