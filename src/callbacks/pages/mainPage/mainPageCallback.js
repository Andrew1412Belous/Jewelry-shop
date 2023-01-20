import {
  mainPageElems,
  tabElemNames,
  tabElems,
} from '../../../configs'

import {
  catalogBtnCallback,
  catalogLinkClickCallback,
  catalogTabsCallback,
  salonsBtnCallback,
} from '../../index'

import {
  hideTabContent,
  showTabContent, tabs, tabsContent,
} from '../../../helpers'

export function mainPageCallback () {
  console.log(tabs)
  console.log(tabsContent)

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
}
