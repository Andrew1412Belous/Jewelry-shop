import { toggleDisplayElems } from '../../helpers'

export function personalDataBtn () {
  toggleDisplayElems([this.elems['personal-data']], true)
  toggleDisplayElems([this.elems['security-settings']], false)
}
