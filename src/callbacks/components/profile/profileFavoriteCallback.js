export function profileFavoriteCallback (template) {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: template,
  })

  window[Symbol.for('favorite-comp')].dispatchEvent(new Event('open-favorite'))
}
