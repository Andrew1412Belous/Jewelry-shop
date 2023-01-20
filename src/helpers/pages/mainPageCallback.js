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
import { searchCallback } from '../../callbacks/header/searchCallback'

export function mainPageCallback () {
  hideTabContent()
  showTabContent()

  mainPageElems['salons-btn'].onclick = salonsBtnCallback
  mainPageElems['catalog-tabs'].onclick = catalogTabsCallback
  mainPageElems['catalog-btn'].onclick = catalogBtnCallback
  mainPageElems['blog-btn'].onclick = function () {
    document.location = './blog-page.html'
  }

  tabElemNames.forEach(link => {
    tabElems[link].onclick = catalogLinkClickCallback
  })

  sessionStorage.removeItem('filters')
}
