import {
  hideTabContent,
  showTabContent,
} from '../index'

import {
  headerElems,
  mainPageElems,
  tabElemNames,
  tabElems,
} from '../../configs'

import {
  basketCallback,
  catalogBtnCallback, catalogLinkClickCallback,
  catalogTabsCallback,
  closeMainCallback, favoriteCallback, headerLogoClickCallback,
  profileCallback,
  salonsBtnCallback,
  signInCallback,
  signOutCallback,
  signUpCallback,
} from '../../callbacks'

export function mainPageCallback () {
  hideTabContent()
  showTabContent()

  headerElems.main.onclick = closeMainCallback
  headerElems['sign-up'].onclick = signUpCallback
  headerElems['sign-in'].onclick = signInCallback
  headerElems['sign-out'].onclick = signOutCallback
  headerElems['my-account'].onclick = profileCallback
  headerElems['favorite-products'].onclick = favoriteCallback
  headerElems['basket-products'].onclick = basketCallback
  headerElems['header-logo'].onclick = headerLogoClickCallback

  mainPageElems['salons-btn'].onclick = salonsBtnCallback
  mainPageElems['catalog-tabs'].onclick = catalogTabsCallback
  mainPageElems['catalog-btn'].onclick = catalogBtnCallback

  tabElemNames.forEach(link => {
    tabElems[link].onclick = catalogLinkClickCallback
  })

  sessionStorage.removeItem('filters')
}
