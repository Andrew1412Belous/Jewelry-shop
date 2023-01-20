import { toggleDisplayElems } from '../../../helpers'

export function securitySettingsBtn () {
  toggleDisplayElems([this.elems['security-settings']], true)
  toggleDisplayElems([this.elems['personal-data'], this.elems['security-block'], this.elems['security-verify-block']], false)
  this.elems['security-message'].innerText = ''
}
