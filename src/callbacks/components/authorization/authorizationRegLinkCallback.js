export function authorizationRegLinkCallback (template) {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: template,
  })

  window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
}
