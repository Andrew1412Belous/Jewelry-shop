import { toggleDisplayElems } from '../../helpers'

export function backBtnCallback () {
  toggleDisplayElems([this.elems['profile-general-settings'], this.elems['security-settings'], this.elems['personal-data']], false)

  this.elems['profile-main-page'].style.display = 'flex'
  this.elems['profile-form'].style.width = '600px'
  this.elems.avatar.src = this.elems.picture.src
}
