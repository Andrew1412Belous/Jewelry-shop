import {
  currentUser,
} from '../../../helpers'

import { favoriteProducts } from '../../../helpers/components/favorite/favoriteProducts'
import { signOutClearInfo } from '../../../helpers/components/signOutClearInfo'
import { currentProduct } from '../../../helpers/pages/productPage/currentProduct'
import { basketProducts } from '../../../helpers/components/basket/basketProducts'

export function signOutCallback () {
  sessionStorage.clear()

  signOutClearInfo(currentUser)
  signOutClearInfo(currentProduct)
  signOutClearInfo(favoriteProducts)
  signOutClearInfo(basketProducts)

  this.setAttribute('entered', 'false')

  this.setProfileParams()
}
