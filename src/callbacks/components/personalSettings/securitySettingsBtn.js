export function securitySettingsBtn () {
  this.section.style.display = 'none'

  window[Symbol.for('security-settings')].dispatchEvent(new Event('open-security-settings'))
}
