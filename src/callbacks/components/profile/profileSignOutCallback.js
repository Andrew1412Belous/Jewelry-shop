export function profileSignOutCallback (template) {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: template,
  })

  require('../header/signOutCallback').signOutCallback()
}
