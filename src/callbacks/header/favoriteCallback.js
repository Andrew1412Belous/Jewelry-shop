import {
  currentUser,
  toggleDisplayMain,
  updateMainContent,
} from '../../helpers'

import { headerElems } from '../../configs'

import {
  favProd,
  regForm,
} from '../../components'

export function favoriteCallback () {
  if (!Object.keys(currentUser).length) {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, regForm)
  } else {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, favProd)
  }
}
