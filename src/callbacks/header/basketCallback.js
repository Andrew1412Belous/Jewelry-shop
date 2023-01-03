import { currentUser, toggleDisplayMain, updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { basketProd, regForm } from '../../components'

export function basketCallback () {
  if (!Object.keys(currentUser).length) {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, regForm)
  } else {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, basketProd)
  }
}
