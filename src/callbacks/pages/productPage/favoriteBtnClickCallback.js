import { currentUser } from '../../../helpers'
import { addToFavorite } from '../../../helpers/components/favorite/addToFavorite'
import { currentProduct } from '../../../helpers/pages/productPage/currentProduct'
import { deleteFromFavorite } from '../../../helpers/components/favorite/deleteFromFavorite'

export function favoriteBtnClickCallback (event) {
  console.log(event)
  console.log(!!sessionStorage.getItem('currentUser'))
  if (sessionStorage.getItem('currentUser')) {
    if (event.target.textContent === 'В бажане') {
      addToFavorite(currentProduct)

      event.target.textContent = 'Видалити з бажаного'
    } else {
      deleteFromFavorite(currentProduct)

      event.target.textContent = 'В бажане'
    }
  } else {
    require('../../components/header/signUpCallback').signUpCallback()
  }

  // if (!Object.keys(currentUser).length) {
  // } else if (event.target.textContent === 'В бажане') {
  //   addToFavorite(currentProduct)
  //
  //   event.target.textContent = 'Видалити з бажаного'
  // } else {
  //   deleteFromFavorite(currentProduct)
  //
  //   event.target.textContent = 'В бажане'
  // }
}
