import { currentUser, toggleDisplayMain, updateMainContent } from '../../../helpers'
import { headerElems } from '../../../configs'
import { regForm } from '../../../components'
import { addToFavorite } from '../../../helpers/components/favorite/addToFavorite'
import { currentProduct } from '../../../helpers/pages/productPage/currentProduct'
import { deleteFromFavorite } from '../../../helpers/components/favorite/deleteFromFavorite'

export function favoriteBtnClickCallback (event) {
  if (!Object.keys(currentUser).length) {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, regForm)
  } else if (event.target.textContent === 'В бажане') {
    addToFavorite(currentProduct)

    event.target.textContent = 'Видалити з бажаного'
  } else {
    deleteFromFavorite(currentProduct)

    event.target.textContent = 'В бажане'
  }
}
