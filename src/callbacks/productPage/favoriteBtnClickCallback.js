import { currentUser, toggleDisplayMain, updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { regForm } from '../../components'
import { addToFavorite } from '../../helpers/favorite/addToFavorite'
import { currentProduct } from '../../helpers/productPage/currentProduct'
import { deleteFromFavorite } from '../../helpers/favorite/deleteFromFavorite'

export function favoriteBtnClickCallback (event) {
  if (!Object.keys(currentUser).length) {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, regForm)
  } else if (event.target.textContent === 'Додати в бажане') {
    addToFavorite(currentProduct)

    event.target.textContent = 'Видалити з бажаного'
  } else {
    deleteFromFavorite(currentProduct)

    event.target.textContent = 'Додати в бажане'
  }
}
