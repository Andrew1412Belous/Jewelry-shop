import { updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { myProfile } from '../../components'

export function favoriteBackBtnCallback () {
  updateMainContent(headerElems.main, myProfile)
}
