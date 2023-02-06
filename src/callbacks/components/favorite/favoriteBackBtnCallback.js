const { setProductsParams } = require('../../../helpers/index')

export function favoriteBackBtnCallback (template) {
  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    setProductsParams(document.querySelectorAll('product-card'))
  }

  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  window[Symbol.for('profile-comp')].dispatchEvent(new Event('open-profile'))
}
