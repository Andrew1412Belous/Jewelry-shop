export function registrationAuthLinkCallback (template) {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: template,
  })

  window[Symbol.for('sign-in')].dispatchEvent(new Event('open-auth-form'))
}
