import { toggleDisplayElems } from '../../../helpers'

export function profileSettingCallback () {
  toggleDisplayElems([this.elems['profile-general-settings'], this.elems['personal-data']], true)
  toggleDisplayElems([this.elems['profile-main-page']], false)
  Object.assign(this.elems['profile-form'].style, {
    width: '900px',
  })
}
