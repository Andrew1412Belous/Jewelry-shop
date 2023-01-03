import { headerElems } from '../../configs'
import { toggleDisplayMain } from '../mainElem/toggleDisplayMain'

export function documentKeyDownCallback (event) {
  if (event.code === 'Escape' && headerElems.main.classList.contains('show')) {
    toggleDisplayMain(false)
  }
}
