export function securitySettingsBtn (template) {
  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  window[Symbol.for('security-settings')].dispatchEvent(new Event('open-security-settings'))
}
