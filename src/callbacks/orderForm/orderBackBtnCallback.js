import { updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { basketProd } from '../../components'

export function orderBackBtnCallback () {
  updateMainContent(headerElems.main, basketProd)
}
