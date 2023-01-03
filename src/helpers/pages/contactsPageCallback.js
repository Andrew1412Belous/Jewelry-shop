import { headerElems } from '../../configs'
import {
  basketCallback,
  closeMainCallback, favoriteCallback, headerLogoClickCallback,
  profileCallback,
  signInCallback,
  signOutCallback,
  signUpCallback,
} from '../../callbacks'

export function contactsPageCallback () {
  headerElems.main.onclick = closeMainCallback
  headerElems['sign-up'].onclick = signUpCallback
  headerElems['sign-in'].onclick = signInCallback
  headerElems['sign-out'].onclick = signOutCallback
  headerElems['my-account'].onclick = profileCallback
  headerElems['favorite-products'].onclick = favoriteCallback
  headerElems['basket-products'].onclick = basketCallback
  headerElems['header-logo'].onclick = headerLogoClickCallback
}
