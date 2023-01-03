import { toggleDisplayElems } from '../../helpers'

export function securitySettingsBtn () {
  toggleDisplayElems([this.elems['security-settings']], true)
  toggleDisplayElems([this.elems['personal-data']], false)
  toggleDisplayElems([this.elems['security-block']], false)
  this.elems['security-message'].innerText = ''
}
