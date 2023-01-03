import { headerElems } from '../../configs'
import { toggleDisplayMain } from '../../helpers'

export function closeMainCallback (event) {
  if (event.target === headerElems.main) {
    toggleDisplayMain(false)

    event.target.innerHTML = ''
  }
}
