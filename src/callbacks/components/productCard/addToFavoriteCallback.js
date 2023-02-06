const {
  currentUser,
} = require('../../../helpers/index')

export function addToFavoriteCallback (event) {
  event.preventDefault()

  if (!Object.keys(currentUser).length) {
    window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
  } else {
    this.setAttribute('favorite', 'true')

    const {
      addToFavorite,
      getProduct,
    } = require('../../../helpers/index')

    addToFavorite(getProduct.bind(this, this.section)())

    this.elems['product-favorite'].style.display = 'none'
  }
}
