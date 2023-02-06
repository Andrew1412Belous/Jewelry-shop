const { currentProduct } = require('../../../helpers/index')

export function favoriteBtnClickCallback (event) {
  if (sessionStorage.getItem('currentUser')) {
    if (event.target.textContent === 'В бажане') {
      require('../../../helpers/components/favorite/addToFavorite').addToFavorite(currentProduct)

      event.target.textContent = 'Видалити з бажаного'
    } else {
      require('../../../helpers/components/favorite/deleteFromFavorite').deleteFromFavorite(currentProduct)

      event.target.textContent = 'В бажане'
    }
  } else {
    require('../../index').signUpCallback()
  }
}
