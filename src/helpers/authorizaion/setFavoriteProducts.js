import {checkFavoriteProducts} from '../favorite/checkFavoriteProducts'
import {getProduct} from '../catalog/getProduct'
import {products} from '../../configs'
import {favoriteProducts} from '../favorite/favoriteProducts'
import {currentProduct} from '../productPage/currentProduct'

export function setFavoriteProducts (user) {
  if (user.favoriteProducts) {
    sessionStorage.setItem('favorite', JSON.stringify(user.favoriteProducts))
    user.favoriteProducts.forEach(product => favoriteProducts.push(product))

    if (document.title === 'Catalog') {
      document.querySelectorAll('.product-favorite')
        .forEach((btn, index) => {
          checkFavoriteProducts(btn, getProduct(products[index]), 'catalog-page')
        })
    } else if (document.title === 'Product') {
      checkFavoriteProducts(document.getElementById('favorite-btn'), currentProduct, 'product-page')
    }
  }
}
