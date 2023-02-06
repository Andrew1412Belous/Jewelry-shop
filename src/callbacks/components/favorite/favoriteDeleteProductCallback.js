const {
  getProduct,
  deleteFromFavorite,
  favoriteProducts,
} = require('../../../helpers/index')

export function favoriteDeleteProductCallback (event) {
  const wrapper = event.target.parentNode.parentNode.querySelector('.favorite-product-info')

  deleteFromFavorite(getProduct.bind(wrapper, wrapper)())

  event.target.parentNode.parentNode.remove()

  if (!favoriteProducts.length) require('../../../helpers/index').insertFavoriteProducts(this.section)
}
