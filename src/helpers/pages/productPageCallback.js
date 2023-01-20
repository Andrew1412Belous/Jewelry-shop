 import { setProductPageParam } from '../productPage/setProductPageParam'

import {
  headerElems,
  linksElemNames,
  linksElems, products,
} from '../../configs'

import {
  backLinkCallback, basketCallback,
  categoryLinkCallback,
  closeMainCallback, favoriteBtnClickCallback, favoriteCallback, headerLogoClickCallback,
  profileCallback,
  signInCallback,
  signOutCallback,
  signUpCallback,
} from '../../callbacks'

import { checkFavoriteProducts } from '../favorite/checkFavoriteProducts'
import { currentProduct } from '../productPage/currentProduct'
import { currentUser } from '../profile/currentUser'
import { basketProd, regForm } from '../../components'
import { checkBasketProducts } from '../basket/checkBasketProducts'
import { addToBasket } from '../basket/addToBasket'

export function productPageCallback () {
  const favoriteBtn = document.getElementById('favorite-btn')
  const basketBtn = document.getElementById('basket-btn')

  document.getElementsByClassName('catalog-title')[0]
    .onclick = function (event) {
      if (event.target.id === 'catalog-link') {
        backLinkCallback()
        console.log(10)
      } else if (event.target.id === 'category-link') {
        categoryLinkCallback()
        console.log(20)
      } else {
        document.location = './index.html'

        sessionStorage.removeItem('currentProduct')
        sessionStorage.removeItem('filters')
        sessionStorage.removeItem('price')
      }
    }

  console.log(JSON.parse(sessionStorage.getItem('currentProduct')))

  favoriteBtn.textContent = checkFavoriteProducts(currentProduct)
    ? 'Видалити з бажанного'
    : 'В бажане'

  basketBtn.textContent = checkBasketProducts(currentProduct)
    ? 'В кошику'
    : 'Купити'

  setProductPageParam()

  favoriteBtn.onclick = favoriteBtnClickCallback

  basketBtn.onclick = function (event) {
    if (!Object.keys(currentUser).length) {
      toggleDisplayMain(true)
      updateMainContent(headerElems.main, regForm)
    } else if (event.target.textContent === 'Купити') {
      addToBasket(currentProduct)

      event.target.textContent = 'В кошику'
    } else {
      toggleDisplayMain(true)
      updateMainContent(headerElems.main, basketProd)
    }
  }
}
