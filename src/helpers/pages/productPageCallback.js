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
import { toggleDisplayMain } from '../mainElem/toggleDisplayMain'
import { updateMainContent } from '../mainElem/updateMainContent'
import { basketProd, regForm } from '../../components'
import { checkBasketProducts } from '../basket/checkBasketProducts'
import { addToBasket } from '../basket/addToBasket'

export function productPageCallback () {
  const favoriteBtn = document.getElementById('favorite-btn')
  const basketBtn = document.getElementById('basket-btn')

  checkFavoriteProducts(favoriteBtn, currentProduct, 'product-page')
  checkBasketProducts(basketBtn, currentProduct, 'product-page')
  setProductPageParam()

  headerElems.main.onclick = closeMainCallback
  headerElems['sign-up'].onclick = signUpCallback
  headerElems['sign-in'].onclick = signInCallback
  headerElems['sign-out'].onclick = signOutCallback
  headerElems['my-account'].onclick = profileCallback
  headerElems['favorite-products'].onclick = favoriteCallback
  headerElems['basket-products'].onclick = basketCallback
  headerElems['header-logo'].onclick = headerLogoClickCallback

  linksElemNames.forEach(link => {
    link === 'category-link'
      ? linksElems[link].onclick = categoryLinkCallback
      : linksElems[link].onclick = backLinkCallback
  })

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
