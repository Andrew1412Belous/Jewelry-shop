const { profileTemplate } = require('../../../templates/index')

export function profileFavoriteCallback () {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: profileTemplate,
  })

  window[Symbol.for('favorite-comp')].dispatchEvent(new Event('open-favorite'))
}
