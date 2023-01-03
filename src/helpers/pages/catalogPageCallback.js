import {
  headerElems,
  filterButtons,
  filterBtnsElemNames,
  filterShowBtns,
  filtersShowButtonNames,
  filterClearButtonNames,
  products,
  filterClearBtns,
  priceElemNames,
  priceElems, filteredProducts,
} from '../../configs'

import {
  basketCallback,
  closeMainCallback, favoriteCallback,
  filterButtonCallback,
  filterClearBtnCallback,
  filterPriceInputCallback,
  filterShowBtnCallback, headerLogoClickCallback,
  profileCallback,
  showMoreProductsBtnCallback,
  signInCallback,
  signOutCallback,
  signUpCallback,
} from '../../callbacks'

import { getProduct } from '../catalog/getProduct'
import { checkFilters } from '../catalog/checkFilters'
import { currentUser } from '../profile/currentUser'
import { toggleDisplayMain } from '../mainElem/toggleDisplayMain'
import { updateMainContent } from '../mainElem/updateMainContent'
import { regForm } from '../../components'
import { checkFavoriteProducts } from '../favorite/checkFavoriteProducts'
import { addToFavorite } from '../favorite/addToFavorite'
import { checkBasketProducts } from '../basket/checkBasketProducts'

export function catalogPageCallback () {
  checkFilters()

  headerElems.main.onclick = closeMainCallback
  headerElems['sign-up'].onclick = signUpCallback
  headerElems['sign-in'].onclick = signInCallback
  headerElems['sign-out'].onclick = signOutCallback
  headerElems['my-account'].onclick = profileCallback
  headerElems['favorite-products'].onclick = favoriteCallback
  headerElems['basket-products'].onclick = basketCallback
  headerElems['header-logo'].onclick = headerLogoClickCallback

  priceElemNames.forEach(input => {
    priceElems[input].oninput = filterPriceInputCallback
  })

  filterBtnsElemNames.forEach(btn => {
    filterButtons[btn].onclick = filterButtonCallback
  })

  filtersShowButtonNames
    .forEach(button => {
      filterShowBtns[button].onclick = filterShowBtnCallback
    })

  filterClearButtonNames
    .forEach(button => {
      filterClearBtns[button].onclick = filterClearBtnCallback
    })

  document.querySelectorAll('.product-favorite')
    .forEach((btn, index) => {
      checkFavoriteProducts(btn, getProduct(products[index]), 'catalog-page')

      btn.onclick = function (event) {
        event.preventDefault()

        if (!Object.keys(currentUser).length) {
          toggleDisplayMain(true)
          updateMainContent(headerElems.main, regForm)
        } else {
          addToFavorite(getProduct(products[index]))

          event.target.style.display = 'none'
        }
      }
    })

  document.getElementById('show-more-btn').onclick = showMoreProductsBtnCallback

  document.querySelectorAll('.product-btn')
    .forEach((btn, index) => {
      btn.textContent = `${getProduct(products[index]).price.toLocaleString('ru-RU')} ₴`

      checkBasketProducts(btn, getProduct(products[index]), 'catalog-page')

      btn.onclick = function () {
        sessionStorage.setItem('currentProduct', JSON.stringify(getProduct(products[index])))

        document.location.href = './product-page.html'
      }
    })
}
