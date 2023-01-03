import {
  currentUser,
  toggleDisplayMain,
  updateMainContent,
} from '../../helpers'

import { headerElems } from '../../configs'

import {
  myProfile,
  regForm,
} from '../../components'

export function profileCallback () {
  if (!Object.keys(currentUser).length) {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, regForm)
  } else {
    toggleDisplayMain(true)
    updateMainContent(headerElems.main, myProfile)
  }
}
