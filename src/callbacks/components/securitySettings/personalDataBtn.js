export function personalDataBtn (template) {
  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  window[Symbol.for('personal-settings')].dispatchEvent(new Event('open-personal-settings'))
}
