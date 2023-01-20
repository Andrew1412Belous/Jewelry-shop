import { currentUser, getProduct } from '../../../helpers'
import { addToFavorite } from '../../../helpers/favorite/addToFavorite'

export function addToFavoriteCallback (event) {
  console.log(event.target)

  this.setAttribute('favorite', 'true')

  event.preventDefault()

  if (!Object.keys(currentUser).length) {
    window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
  } else {
    addToFavorite(getProduct.bind(this, this.section)())

    this.elems['product-favorite'].style.display = 'none'
  }
}