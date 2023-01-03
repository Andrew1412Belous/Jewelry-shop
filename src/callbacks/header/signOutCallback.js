import {
  changeProfileIcon,
  currentUser,
  toggleDisplayHeaderLinks,
} from '../../helpers'

import { defaultProfileAvatar } from '../../assets'
import { favoriteProducts } from '../../helpers/favorite/favoriteProducts'
import { signOutClearInfo } from '../../helpers/header/signOutClearInfo'
import { currentProduct } from '../../helpers/productPage/currentProduct'
import { basketProducts } from '../../helpers/basket/basketProducts'

export function signOutCallback () {
  signOutClearInfo(currentUser, 'currentUser')
  signOutClearInfo(currentProduct, 'currentProduct')
  signOutClearInfo(favoriteProducts, 'favorite')
  signOutClearInfo(basketProducts, 'basket')

  if (document.title === 'Catalog') {
    document.querySelectorAll('.product-favorite')
      .forEach(btn => btn.style.display = 'block')
  } else if (document.title === 'Product') {
    document.getElementById('favorite-btn').textContent = 'Додати в бажане'
  }

  changeProfileIcon(defaultProfileAvatar)
  toggleDisplayHeaderLinks(true)
}
