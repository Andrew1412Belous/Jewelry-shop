const basketProducts = require('./basketProducts').basketProducts
const patchUser = require('../../fetch/patchUser').patchUser
const currentUser = require('../profile/currentUser').currentUser

export function addToBasket (product) {
  basketProducts.push(product)

  sessionStorage.setItem('basket', JSON.stringify(basketProducts))

  patchUser(currentUser.id, {
    basketProducts,
  })
    .then(response => {
      Object.assign(currentUser, response)

      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    })
}
