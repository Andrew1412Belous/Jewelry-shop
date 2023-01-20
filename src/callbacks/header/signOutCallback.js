import {
  currentUser,
} from '../../helpers'

import { favoriteProducts } from '../../helpers/favorite/favoriteProducts'
import { signOutClearInfo } from '../../helpers/components/signOutClearInfo'
import { currentProduct } from '../../helpers/productPage/currentProduct'
import { basketProducts } from '../../helpers/basket/basketProducts'

export function signOutCallback () {
  sessionStorage.clear()

  signOutClearInfo(currentUser)
  signOutClearInfo(currentProduct)
  signOutClearInfo(favoriteProducts)
  signOutClearInfo(basketProducts)

  this.setAttribute('entered', 'false')

  this.setProfileParams()
}
