import {
  getProduct, insertFavoriteProducts,
} from '../../../helpers'
import { deleteFromFavorite } from '../../../helpers/components/favorite/deleteFromFavorite'
import { favoriteProducts } from '../../../helpers/components/favorite/favoriteProducts'

export function favoriteDeleteProductCallback (event) {
  const wrapper = event.target.parentNode.parentNode.querySelector('.favorite-product-info')

  console.log(getProduct.bind(wrapper, wrapper)())
  deleteFromFavorite(getProduct.bind(wrapper, wrapper)())

  event.target.parentNode.parentNode.remove()

  if (!favoriteProducts.length) insertFavoriteProducts(this.section)
}
