import { currentUser, getProduct } from '../../../helpers'
import { addToFavorite } from '../../../helpers/components/favorite/addToFavorite'

export function addToFavoriteCallback (event) {
  event.preventDefault()

  if (!Object.keys(currentUser).length) {
    window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
  } else {
    this.setAttribute('favorite', 'true')

    addToFavorite(getProduct.bind(this, this.section)())

    this.elems['product-favorite'].style.display = 'none'
  }
}
