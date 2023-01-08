import {
  getProduct, insertFavoriteProducts,
} from '../../helpers'
import { deleteFromFavorite } from '../../helpers/favorite/deleteFromFavorite'
import { favoriteProducts } from '../../helpers/favorite/favoriteProducts'
import { checkFavoriteProducts } from '../../helpers/favorite/checkFavoriteProducts'
import { products } from '../../configs'

export function favoriteDeleteProductCallback (event) {
  const selectedProduct = getProduct(event.target.parentNode.parentNode
    .querySelector('.favorite-product-info'))

  deleteFromFavorite(selectedProduct)

  event.target.parentNode.parentNode.remove()

  if (!favoriteProducts.length) insertFavoriteProducts(this.section)
}
