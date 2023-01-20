import { addElem, toggleDisplayMain, updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { searchComp } from '../../components'

export function searchCallback () {
  toggleDisplayMain(true)
  updateMainContent(headerElems.main, searchComp)
}
