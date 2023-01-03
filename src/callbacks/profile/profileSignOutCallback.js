import {
  changeProfileIcon,
  currentUser,
  toggleDisplayHeaderLinks,
  toggleDisplayMain,
} from '../../helpers'

import { defaultProfileAvatar } from '../../assets'

export function profileSignOutCallback () {
  sessionStorage.removeItem('currentUser')

  for (const prop in currentUser) {
    delete currentUser[prop]
  }

  changeProfileIcon(defaultProfileAvatar)
  toggleDisplayHeaderLinks(true)
  toggleDisplayMain(false)
}
