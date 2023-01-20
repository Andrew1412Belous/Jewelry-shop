export function hideComponentCallback (template) {
  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  document.body.style.overflow = ''
}
