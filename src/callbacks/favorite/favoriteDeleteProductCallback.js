import {
  getProduct, insertFavoriteProducts,
} from '../../helpers'
import { deleteFromFavorite } from '../../helpers/favorite/deleteFromFavorite'
import { favoriteProducts } from '../../helpers/favorite/favoriteProducts'

export function favoriteDeleteProductCallback (index, event) {
  const wrapper = this.section.querySelectorAll(
    '.favorite-product-info')[index]

  console.log(getProduct.bind(wrapper, wrapper)())
  deleteFromFavorite(getProduct.bind(wrapper, wrapper)())

  event.target.parentNode.parentNode.remove()

  if (!favoriteProducts.length) insertFavoriteProducts(this.section)
}
