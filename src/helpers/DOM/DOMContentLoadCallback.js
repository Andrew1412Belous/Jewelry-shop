import { changeProfileIcon } from '../header/changeProfileIcon'
import { currentUser } from '../profile/currentUser'
import { toggleDisplayHeaderLinks } from '../header/toggleDisplayHeaderLinks'
import { setPageCallbacks } from './setPageCallbacks'

export function DOMContentLoadCallback () {
  if (sessionStorage.getItem('currentUser')) {
    changeProfileIcon(currentUser.avatar)
    toggleDisplayHeaderLinks(false)
  }

  setPageCallbacks(document.title)
}
